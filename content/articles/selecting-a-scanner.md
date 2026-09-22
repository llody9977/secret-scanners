## Requirements should describe the environment before the product

Scanner selection becomes more defensible when the organization first identifies its credential families, exposure surfaces, code hosts, developer workflows, enforcement points, network constraints, and response systems.

A fast repository engine may be sufficient for a controlled merge gate while leaving collaboration systems and artifacts to another service. A commercial platform may reduce integration work across thousands of repositories. A repository host may provide the only practical receive-time gate. The best fit depends on which gap needs to close.

The requirement should also name what the organization can operate. An open engine can avoid service dependency while requiring internal ownership of updates, source access, dashboards, routing, exceptions, and support.

## A capability matrix needs bounded claims

Each candidate should be assessed across the same dimensions.

| Dimension        | Questions                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| Detection        | Which provider, generic, internal, multipart, encoded, and unstructured values are documented or observed  |
| Inputs           | Which branches, history, files, artifacts, images, logs, messages, cloud stores, and endpoints are reached |
| Enforcement      | Which local, receive-time, merge, deployment, or discovery decisions can the product control               |
| Validation       | Which credentials can be checked, through which endpoints, and with what result states                     |
| Operation        | How versions, rules, failures, latency, scaling, and updates are handled                                   |
| Governance       | How inventory, ownership, bypass, exceptions, routing, evidence, access, and retention work                |
| Data handling    | What content leaves the environment and what the engine, service, validator, or model retains              |
| Commercial model | Which edition contains the capability and what ongoing internal work remains                               |

Documented capability and observed behavior belong in separate fields. A product page can establish that a connector exists. Only a configured test shows that the selected account, edition, permissions, and source work as required.

## Evaluation should use representative control cases

A useful test set includes expected credential families, internal formats, common file types, historical commits, realistic placements, encodings, and benign lookalikes. It should also include failure cases such as an unavailable validator, a malformed report, a shallow clone, and an excluded path.

Synthetic values are safer and reproducible, but they have limits. They may match a token format without being live. A verified-only scanner can therefore appear to miss everything. Real repositories contain context and transformations the designed corpus did not anticipate.

The evaluation should separate:

- stock and tuned configurations
- working-tree and history coverage
- detection and live validation
- supported and unreachable placements
- clean and incomplete runs
- product behavior and organization workflow behavior

The goal is to learn how the control behaves, not to maximize one headline number.

For a first evaluation, keep the corpus small enough to explain every expected result. Include one supported provider format, one organization-specific format if relevant, one benign lookalike, one historical placement, and one execution failure. Add file types, encodings, and sources only when they represent a requirement the initial cases cannot answer.

## Metrics need their population and date

Precision, recall, false positives, false negatives, runtime, and resource use can be useful when the ground truth is sound. They remain properties of a stated corpus, version, configuration, mode, and date.

An identifier that cannot authenticate should not become a planted secret. A malformed token should not penalize a scanner for rejecting it. A history-only value should be N/A for a tool that was intentionally run against the working tree, while complete-population coverage should still show that the placement remains uncovered.

Public research and local tests should not be blended into one ranking. Historical studies help explain methods and known failure modes. They do not establish current procurement order after products, rulesets, and editions change.

## Operational tests often decide the selection

Detection quality is only one dependency. A candidate should also demonstrate that it can:

- distinguish findings from execution failures
- redact secrets before publishing summaries
- fit the required latency budget
- preserve the commit, source, and rule provenance needed for response
- route to a current service owner
- support narrow exceptions with expiry
- recover after an integration or service outage
- update rules without changing every repository independently
- expose enough coverage evidence for governance

A technically capable engine can still be the wrong control when its failure state is invisible or its reports create another exposure.

## A bounded evaluation should test one complete path

A bounded evaluation should use one non-production repository or representative service and follow a safe synthetic credential from introduction to decision. Test the control positions the organization can actually administer. The path should observe the enforced gate, finding or case reference, owner routing, exception handling, and a failed-scan case. Local feedback and centralized normalization are useful additions when they are part of the intended design, not prerequisites for every evaluation.

If validation is in scope, it should use a purpose-built test account or provider-supported test value. Do not use a production credential or send an unknown candidate to a provider without authorization.

Acceptance evidence should show the input, configuration, tool version, completed scope, output state, gate decision, and safe report handling. If a managed service does not expose the exact engine or rule version, record the service, edition, test date, and observed behavior instead of inventing precision. A passing syntax check or successful tool installation is not control evidence.

The minimum decision sequence is:

1. Name the credential family, source, and event that need control.
2. Confirm that the required edition, permissions, network path, and administrative authority are available.
3. Run the expected finding, benign lookalike, and failed-execution cases.
4. Record the decision, uncovered positions, operating owner, and review date.

## The decision should assign every remaining responsibility

The selection record should state why the combination is sufficient and what it does not cover. It should identify the owner for detector updates, platform configuration, source onboarding, exceptions, incident intake, metrics, and periodic review.

The smallest sufficient combination is often easier to govern than several overlapping engines. A repository-host gate, a portable internal-format check, and a scheduled discovery service may cover the required positions. Another organization may choose one commercial platform with a portable fallback.

The maintained [scanner catalog](/secret-scanners/scanners/) is a starting point. The final decision belongs to the target environment and its evidence.

## Benchmarking can remain optional

A public comparative benchmark is valuable only when someone will maintain its corpus, tool adapters, versions, scoring, and incomplete-run states. Without that commitment, dated product profiles and a transparent evaluation method are more accurate than a stale leaderboard.

Earlier benchmark scores are not presented as current market findings. A future benchmark should be a separate, explicitly versioned track with a maintained corpus, reproducible adapters, and visible incomplete-run states.
