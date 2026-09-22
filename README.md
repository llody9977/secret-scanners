# Secret Scanning

An operational decision guide to secret-scanner capabilities, deployment
points, coordinated gates, AI-assisted detection, selection, and governance.

The site complements
[Secret Exposure](https://llody9977.github.io/secret-exposure/). It stays
focused on detection and enforcement while the companion publication covers
business risk, credential lifecycle, containment, recovery, and reducing
persistent credentials.

The publication helps readers decide what a scan result supports, where a
control can act, what remains with the operator, and what evidence is needed
before relying on it. It is not an installation tutorial, product benchmark,
or claim that a documented feature is enabled in a particular environment.

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
catalog, and reference invariants.

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
- No live credential belongs in examples, issues, test data, or published
  output.

Apache-2.0. Defensive use only.
