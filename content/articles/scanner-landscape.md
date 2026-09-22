## Product categories leave different responsibilities behind

The term secret scanner covers several operating models.

An open-source engine can run entirely inside controlled infrastructure and can expose its rules and output format. The organization usually owns deployment, updates, authentication to source systems, report storage, routing, exceptions, dashboards, and support.

An open client backed by a commercial service may provide convenient developer and CI integration while sending content or derived data to an API. A commercial platform can add repository inventory, findings workflow, historical scanning, policy, and reporting. A repository host can enforce at the receive boundary in a way that ordinary CI cannot.

These categories are not a quality ranking. They describe who operates the control and where enforcement authority resides.

## Open engines range from narrow hooks to broad discovery

git-secrets provides configured prohibited patterns and repository-local hooks. detect-secrets adds plugins, heuristics, entropy, filtering, and a baseline model. Gitleaks offers a portable rule-driven engine for files and Git. Secretlint supplies an extensible lint model.

TruffleHog, Betterleaks, Kingfisher, and Titus extend into provider validation, wider data sources, extraction, or security-assessment workflows. Trivy includes secret detection within a broader vulnerability and configuration scanner.

The difference affects more than recall. A scanner that can enumerate cloud storage, code-host issues, collaboration messages, or CI artifacts needs credentials to those systems. Its own access, logs, cache, network calls, and stored results become security design decisions.

The maintained [scanner catalog](/secret-scanners/scanners/) records representative capabilities and primary sources without treating repository popularity as procurement evidence.

## Commercial services combine detection with operation

GitGuardian combines a service-backed detection engine, monitored sources, incidents, validity, public monitoring, honeytokens, and an open-source CLI named ggshield. The CLI can run locally and in CI, but its normal operation uses the GitGuardian API. Connectivity and fail-open behavior therefore matter at a blocking gate. [ggshield documentation](https://docs.gitguardian.com/ggshield-docs/home).

Semgrep Secrets combines rules, entropy, semantic analysis, validation, policy, and developer workflow integration. Custom validators can keep the validation request local to the scanning environment, while the selected platform plan and processing model still need review. [Semgrep validators](https://semgrep.dev/docs/semgrep-secrets/validators).

A commercial platform can reduce the engineering needed for inventory, routing, retention, and reporting. It does not remove the need to confirm enabled repositories, supported inputs, product entitlements, bypass authority, validation behavior, and incident ownership.

## Repository platforms control a stronger boundary

GitHub and GitLab can evaluate content at the server receive path. That position can reject a push before the remote reference accepts it. A portable CI scanner usually runs after the branch has already reached the platform.

GitHub Secret Protection distinguishes provider, generic, custom, and AI-detected patterns. Their alert, push-protection, validation, and metadata capabilities are not identical. Availability also varies by repository ownership and plan. [GitHub supported patterns](https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns).

GitLab separates secret push protection, pipeline secret detection, and client-side detection for issue and merge-request text. Push protection is a pre-receive control, while pipeline scanning runs after content reaches GitLab. Product tiers affect dashboards, approval workflows, policies, and customization. [GitLab secret detection](https://docs.gitlab.com/user/application_security/secret_detection/).

Bitbucket Data Center documents native scanning of new commits. That claim does not transfer to Bitbucket Cloud, where third-party or portable pipeline controls may be needed. Platform and edition names belong beside every capability statement. [Bitbucket Data Center secret scanning](https://confluence.atlassian.com/spaces/SECURITY/pages/1409092176/Secret%2Bscanning), [Bitbucket Cloud pipes](https://support.atlassian.com/bitbucket-cloud/docs/use-pipes-in-bitbucket-pipelines/).

## A feature list does not show effective coverage

Product documentation can establish that a capability exists. It does not establish that the selected edition includes it, the organization enabled it, every required source is connected, the configured patterns cover internal credentials, or the response workflow operates.

The control record should distinguish documented, configured, observed, and not evaluated capabilities. Closed products may not disclose the exact mechanism behind a finding. In those cases, the evidence should say what behavior was observed without guessing whether regex, entropy, semantic analysis, or a model caused it.

Coverage also changes. Rules, providers, editions, and connectors evolve. Every product profile needs a review date and a maintained owner.

## The smallest sufficient combination is often stronger

A practical design may use the repository host for high-confidence receive-time protection, a portable engine for internal formats and consistent CI policy, and a scheduled discovery capability for history and wider sources. Another organization may choose a platform that supplies most of those functions as one service.

Running every engine at every stage adds latency, duplicate findings, exception drift, and maintenance. The better combination closes named gaps and assigns each component one clear role. Tool count is not a control objective.
