# Migration record

Reviewed on 22 September 2026 before the planned retirement of
`secret-scan` and `secret-scanner-benchmark`.

## Material carried into the publication

From `secret-scan`:

- control classification by the event a gate can prevent
- local-hook installation and bypass limits
- receive-time, CI, and scheduled-discovery distinctions
- fail-visible scanner outcomes
- safe report redaction and restricted raw evidence
- central policy, exception, bypass, and response ownership
- synthetic regression cases as a way to test an organization's configured
  gate rather than rank products

From `secret-scanner-benchmark`:

- separation of comparative benchmarking from configured-control regression
- planted, decoy, identifier, malformed, and unreachable populations
- incomplete scans as a distinct state rather than a clean result
- the non-live synthetic credential validation trap
- version, configuration, corpus, date, and scope provenance
- bounded metrics and stock-versus-tuned separation

## Historical records retained

- `historical/benchmark-2026-09-01.json`
- `historical/control-regression-2026-08-25.json`

These files preserve sanitized machine-readable evidence and original
provenance. They are historical snapshots, not current product rankings.

## Material deliberately not copied

- the complete benchmark generator, adapters, and scoring engine
- outdated pinned workflows and tool binaries
- the older static site and visual theme
- duplicated breach, incident-response, and secret-management lifecycle prose
- headline rankings detached from their original corpus and versions

The complete old repositories should be backed up before deletion if their Git
history or executable benchmark may be needed later. This migration preserves
the material needed by the new publication, not every implementation artifact.
