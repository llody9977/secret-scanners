# Secret Scanning

A practical publication about secret-scanner capabilities, deployment points,
centralized gates, AI-assisted detection, selection, and governance.

The site complements
[Secret Exposure](https://llody9977.github.io/secret-exposure/). It stays
focused on detection and enforcement while the companion publication covers
business risk, credential lifecycle, containment, recovery, and reducing
persistent credentials.

## Run locally

```sh
npm ci
npm run dev
```

## Verify the publication

```sh
npm run check
```

The check validates TypeScript, produces the static export, verifies every
article route, checks internal links and anchors, and reconciles article,
catalog, reference, and historical-evidence invariants.

## Contribution model

This is a single-maintainer publication. Changes reach `main` through a pull
request after the validation and CodeQL checks complete. Dependencies are
reviewed through Dependabot, GitHub Actions use immutable commit pins, and
workflow credentials remain read-only unless a deployment job needs narrower
write access.

## Evidence boundaries

- Product claims use primary documentation or upstream repositories.
- The scanner catalog is dated and non-ranked.
- Documented, configured, observed, failed, and not evaluated states remain
  distinct.
- Historical benchmark records are preserved under `research/historical/` and
  are not presented as current market results.
- No live credential belongs in examples, issues, test data, or published
  output.

Apache-2.0. Defensive use only.
