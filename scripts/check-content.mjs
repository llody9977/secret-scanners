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
const publishedText = articleSources.map(({ source }) => source).join("\n");

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

const benchmark = JSON.parse(readFileSync("research/historical/benchmark-2026-09-01.json", "utf8"));
for (const tool of benchmark.tools) {
  assert.equal(tool.tp + tool.fn + tool.na, tool.sigma, `${tool.tool} population is inconsistent`);
  if (tool.tp + tool.fp > 0) {
    const precision = `${((100 * tool.tp) / (tool.tp + tool.fp)).toFixed(1)}%`;
    assert.equal(tool.precision, precision, `${tool.tool} precision is inconsistent`);
  }
  const recall = `${((100 * tool.tp) / (tool.tp + tool.fn)).toFixed(1)}%`;
  assert.equal(tool.recall, recall, `${tool.tool} recall is inconsistent`);
}
for (const retired of benchmark.retired.patterns) {
  assert(
    !new RegExp(retired, "i").test(publishedText),
    `Retired benchmark figure returned: ${retired}`,
  );
}

const regression = JSON.parse(
  readFileSync("research/historical/control-regression-2026-08-25.json", "utf8"),
);
const positives = regression.corpus.scenarios.filter(
  (scenario) => scenario.expected_control_decision === "block",
);
const negatives = regression.corpus.scenarios.filter(
  (scenario) => scenario.expected_control_decision === "pass",
);
assert.equal(positives.length, regression.corpus.positive_scenarios);
assert.equal(negatives.length, regression.corpus.safe_negative_scenarios);
for (const tool of ["gitleaks", "trufflehog"]) {
  assert.equal(
    positives.filter((scenario) => scenario[tool].detected).length,
    regression.summary[`${tool}_positive_scenarios_detected`],
  );
  assert.equal(
    negatives.filter((scenario) => !scenario[tool].detected).length,
    regression.summary[`${tool}_safe_negatives_passed`],
  );
}

console.log(
  `Verified ${articleFiles.length} article sources, ${referenceUrls.size} registered references, and 2 historical evidence records.`,
);
