# Scanner activity check

Checked 22 September 2026.

## Method

This check answers whether each listed scanner still has current upstream or first-party product evidence. It does not establish product quality, security, support response, or suitability.

For open-source projects, the check recorded whether the upstream GitHub repository was archived, the latest default-branch push, and the latest published GitHub release. `Active` means release or default-branch activity was visible within the preceding 12 months. A current commit without a recent release is stated separately so repository activity is not misrepresented as a shipped version.

For hosted products, the check used current first-party documentation plus a dated product change, documentation change, or related maintained client or engine. A live marketing page alone was not treated as sufficient evidence of recent product activity.

## Results

| Scanner                  | Classification                           | Evidence observed                                                                            |
| ------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| Gitleaks                 | Active                                   | v8.30.1 released 21 March 2026; upstream push 9 September 2026                               |
| Betterleaks              | Active                                   | v1.8.1 released 18 August 2026; upstream push 22 September 2026                              |
| TruffleHog               | Active                                   | v3.97.5 released 16 September 2026; upstream push 22 September 2026                          |
| detect-secrets           | Maintained with a slower release cadence | Default-branch activity 2 April 2026; latest release v1.5.0 from 6 May 2024                  |
| git-secrets              | Limited recent activity                  | Repository not archived; latest upstream push 17 September 2025; no GitHub release published |
| Secretlint               | Active                                   | v13.0.5 released 27 August 2026; upstream push 22 September 2026                             |
| Kingfisher               | Active                                   | v2.5.0 released 18 September 2026; upstream push 22 September 2026                           |
| Titus                    | Active                                   | v1.2.9 released 31 August 2026; upstream push 21 September 2026                              |
| Trivy                    | Active                                   | v0.74.0 released 14 August 2026; upstream push 22 September 2026                             |
| GitGuardian and ggshield | Active service and open-source client    | ggshield v1.54.0 released 26 August 2026; product documentation updated 31 August 2026       |
| Semgrep Secrets          | Current commercial product               | Current product documentation; Semgrep engine v1.177.0 released 10 September 2026            |
| GitHub Secret Protection | Current repository-platform capability   | Product changes published through 9 September 2026                                           |
| GitLab Secret Detection  | Current repository-platform capability   | Current first-party documentation; overview documentation updated 11 March 2026              |

## Interpretation

The review does not support describing every listed project as actively maintained. `git-secrets` remains usable and unarchived, but its activity evidence is materially weaker than the other entries. `detect-secrets` shows 2026 source activity while its latest tagged release is older. Those distinctions now appear in the public catalog.

Maintenance should be checked again before selection because repository activity can change after this dated review.
