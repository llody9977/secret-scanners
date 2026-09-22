## A finding is a candidate that needs context

A scanner reports that configured logic matched content. The match may be a provider-issued token, a private key, an internal credential, an example value, or ordinary text that resembles one. The finding establishes where the candidate appeared and which detector reported it. It does not by itself establish who owns the value, what it permits, whether it remains active, or whether anyone used it.

That boundary matters when a result crosses from engineering into incident response. A recognized provider prefix can give a useful credential type. File and repository metadata can identify the exposure surface. Validation may show that a provider accepted the value for a particular request at a particular time. Each addition reduces uncertainty, but none proves the complete incident.

A useful finding record therefore keeps the detector, location, commit or artifact, scan time, tool and rule version, validation state, and handling restrictions. The raw value should not be copied into tickets, chat, or broadly readable build output.

## Clean and complete are different claims

A clean result means that the scanner completed the intended work and reported no matches under its active configuration. It does not mean that no secret exists.

The scan may not cover every credential family, encoding, branch, historical commit, large file, binary, artifact, or connected source. A rule may also depend on context that an obfuscated value does not provide. GitHub and GitLab document different coverage and limitations for background scanning, push protection, and pipeline scanning. Those distinctions are part of the result, not implementation detail. [GitHub scanning scope](https://docs.github.com/en/code-security/reference/secret-security/secret-scanning-scope), [GitLab pipeline detection](https://docs.gitlab.com/user/application_security/secret_detection/pipeline/).

Coverage therefore needs a denominator. A statement such as “97 percent of repositories completed the required history scan this week” supports a decision. “No secrets were found” does not explain whether the remaining repositories failed, were excluded, or never ran.

## A failed scan must remain visible

Secret-scanning controls need at least three outcomes.

| Outcome    | Meaning                                                                                          | Required action                                                   |
| ---------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Finding    | The scan completed and reported one or more candidates                                           | Triage, contain confirmed access, and preserve a safe case record |
| Clean      | The scan completed over the declared scope with no findings                                      | Retain completion evidence and monitor coverage                   |
| Incomplete | The scanner failed, timed out, produced an unreadable report, or could not reach required inputs | Restore coverage and do not record the run as clean               |

An empty or missing report cannot be interpreted safely without the process outcome and scope metadata. A workflow that continues after a scanner crash may protect delivery availability, but its status must say that coverage was unavailable. Otherwise operational resilience becomes false assurance.

The same discipline applies to individual validation checks. Network errors, permission failures, rate limits, and unsupported credential types are inconclusive. They are not invalid credentials.

## Validation narrows one question

Live validation asks whether a provider accepts a candidate for a defined operation now. TruffleHog, Betterleaks, Kingfisher, Titus, GitGuardian, and Semgrep document validation for supported credential families. The capability can separate many active credentials from expired or fabricated values and can add useful metadata.

Validation also introduces consequences. It sends material derived from the candidate to an external service, may create audit events, consumes rate limits, and could perform an unsafe action if the check is poorly designed. The organization needs to approve the validator, endpoint, request method, network path, and retained response data.

A successful check does not establish historical validity or misuse. A rejected request may mean invalid credentials, insufficient permission for that operation, a changed endpoint, or a defensive provider response. The result should retain the exact validation state rather than collapsing every non-success into “safe.”

## Identifiers and authenticators need separate treatment

Some values help identify an account without authenticating to it. An AWS access key ID, OAuth client ID, certificate serial number, or public key may be sensitive in context, but it does not normally grant access alone. Counting every identifier as a leaked authenticator distorts recall and directs response effort toward the wrong object.

Multipart credentials create the opposite problem. A username and password, access key ID and secret key, or client ID and client secret may be separated across files or systems. A detector can find one component without establishing that the complete usable credential was exposed.

The finding model should therefore distinguish authenticators, identifiers, public material, multipart components, malformed values, and nonsecret decoys. This improves triage and prevents product comparisons from rewarding tools merely for reporting more strings.

## The result becomes useful when it changes a decision

A detector produces security value when the finding reaches an owner who can stop the access, recover the service, and address the storage or delivery path that created it. Alert closure alone does not show that the credential was invalidated.

The scanner record should connect to the broader credential lifecycle without attempting to replace it. The companion [Secret Exposure publication](https://llody9977.github.io/secret-exposure/) covers containment, recovery, governance, and the move away from persistent credentials. Secret scanning supplies evidence to that process. It is not the process itself.
