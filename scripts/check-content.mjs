import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const articleDirectory = "content/articles";
const articleFiles = readdirSync(articleDirectory)
  .filter((file) => file.endsWith(".md"))
  .sort();
const articleSources = articleFiles.map((file) => ({
  file,
  source: readFileSync(join(articleDirectory, file), "utf8"),
}));

const catalogSource = readFileSync("lib/catalog.ts", "utf8");
const catalogSlugs = [...catalogSource.matchAll(/slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);
assert.deepEqual(
  articleFiles.map((file) => file.slice(0, -3)),
  [...catalogSlugs].sort(),
  "Article files and catalog entries differ",
);

const referenceSource = readFileSync("app/references/page.tsx", "utf8");
const referenceUrls = new Set(
  [...referenceSource.matchAll(/"(https:\/\/[^"\s]+)"/g)].map((match) => match[1]),
);
assert.equal(referenceUrls.size, [...referenceSource.matchAll(/"https:\/\/[^"\s]+"/g)].length);

const externalArticleUrls = new Set();
for (const { file, source } of articleSources) {
  assert(!/^# /m.test(source), `${file} must not contain a second page title`);
  assert(
    (source.match(/^## /gm) ?? []).length >= 4,
    `${file} needs at least four connected sections`,
  );
  for (const match of source.matchAll(/\]\((https:\/\/[^)]+)\)/g)) {
    externalArticleUrls.add(match[1]);
  }
}

const allowedCompanionUrls = new Set(["https://llody9977.github.io/secret-exposure/"]);
for (const url of externalArticleUrls) {
  assert(
    referenceUrls.has(url) || allowedCompanionUrls.has(url),
    `Article source is missing from the reference register: ${url}`,
  );
}

const scannerSource = readFileSync("lib/scanners.ts", "utf8");
for (const match of scannerSource.matchAll(/(?:activitySource|source): "([^"]+)"/g)) {
  assert(match[1].startsWith("https://"), `Scanner source must use HTTPS: ${match[1]}`);
}

console.log(
  `Verified ${articleFiles.length} article sources and ${referenceUrls.size} registered references.`,
);
