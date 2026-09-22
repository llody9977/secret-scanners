import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve("out");
const base = process.env.SITE_BASE_PATH ?? "/secret-scanners";
const portIndex = process.argv.indexOf("--port");
const requestedPort = portIndex >= 0 ? process.argv[portIndex + 1] : process.env.PORT;
const port = Number(requestedPort ?? 4173);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer from 1 through 65535");
}
if (base && !/^\/[a-zA-Z0-9_-]+$/.test(base)) {
  throw new Error("Use an empty base path or one repository path segment");
}
if (!existsSync(join(root, "index.html"))) {
  throw new Error("Static export is missing. Run npm run build first.");
}

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

createServer((request, response) => {
  const url = new URL(request.url ?? "/", "http://127.0.0.1");
  if (base && url.pathname === base) {
    response.writeHead(308, { Location: `${base}/${url.search}` });
    response.end();
    return;
  }
  if (base && !url.pathname.startsWith(`${base}/`)) {
    response.writeHead(404).end("Not found");
    return;
  }

  const relativePath = decodeURIComponent(
    base ? url.pathname.slice(base.length + 1) : url.pathname,
  );
  const safePath = normalize(relativePath).replace(/^([/\\])+/, "");
  let filePath = resolve(root, safePath);
  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    response.writeHead(400).end("Invalid path");
    return;
  }
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(root, "404.html");
    response.statusCode = 404;
  }

  response.setHeader("Content-Type", contentTypes[extname(filePath)] ?? "application/octet-stream");
  response.setHeader("X-Content-Type-Options", "nosniff");
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Static publication available at http://127.0.0.1:${port}${base}/`);
});
