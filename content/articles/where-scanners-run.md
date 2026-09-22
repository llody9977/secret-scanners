## Local feedback is early but not centrally authoritative

Editor checks, pre-commit hooks, and pre-push hooks can identify a candidate before it leaves a developer workstation. This shortens feedback and may prevent a value from entering local Git history.

The limitation is authority. A hook normally needs installation in each clone and can often be bypassed. A repository configuration file does not prove that every contributor installed or ran it. Local scanning is therefore valuable developer support, but it should not be the only organization-wide gate.

GitGuardian, Gitleaks, detect-secrets, git-secrets, Secretlint, and several other engines document local workflows. Their operational value depends on installation coverage, version control, update handling, and a recovery path when the tool is unavailable.

## Receive-time protection can stop the first remote exposure

A repository host or self-managed pre-receive hook can inspect a push before accepting the remote reference. This is the strongest common boundary for preventing covered patterns from entering the shared repository.

GitHub push protection and GitLab secret push protection operate at this point. Both document bypass or exclusion behavior and coverage limits. GitLab, for example, documents diff-only scanning and exclusions for some files and large changes. GitHub documents pattern, size, timeout, and count limits. [GitHub scanning scope](https://docs.github.com/en/code-security/reference/secret-security/secret-scanning-scope), [GitLab push protection](https://docs.gitlab.com/user/application_security/secret_detection/secret_push_protection/).

Central enforcement still needs governance. Someone can enable patterns, review bypasses, manage exclusions, and decide what happens when the host cannot complete the check. That authority should be explicit.

## Pipeline gates protect later decisions

A CI job usually runs after a branch or commit reaches the remote platform. It is detective for the first remote exposure. When the exact check is required by branch or deployment policy, it can prevent merge or release.

This distinction avoids overstating the control. A green pull-request check does not show that the value never reached the repository host. A failing check also needs a safe summary that does not republish the matched value into a more widely readable log or artifact.

Pipeline controls are useful for portable policy, custom formats, report schemas, regression tests, and consistency across code hosts. They need full enough history for their objective, pinned dependencies, visible scanner failures, and rules that prevent an ordinary contributor from removing the required check in the same change it is meant to assess.

## Scheduled discovery reaches residue and drift

Scheduled scanning can revisit history, default branches, newly added rules, repositories missed during onboarding, and sources outside a delivery critical path. It is detective. Its value comes from breadth, repeatability, and owned response rather than immediate blocking.

Discovery jobs should record which sources were expected, reached, excluded, and completed. New rule versions can create old findings, so the record also needs the scanner and rule version. A schedule that silently stops running creates an invisible coverage gap.

Validation may be more suitable here than at a latency-sensitive push gate, but it still needs authorization and safe handling. A wide scan can generate many outbound provider requests and audit events.

## Repositories are only one exposure surface

Credentials also appear in CI logs, build artifacts, container layers, package registries, object storage, issue trackers, documentation, chat, notebooks, browser storage, developer endpoints, and AI tool context.

Different tools document different adapters. Betterleaks covers code-host resources and CI logs or artifacts. Kingfisher covers collaboration systems, documents, packages, containers, and cloud storage. GitGuardian monitors multiple VCS and non-VCS sources. Titus includes document, archive, container, proxy, and browser assessment modes. A Git repository scan should not receive credit for these surfaces merely because the content could theoretically have been committed.

Wider access also increases the scanner's own privilege. A central service account that can read every repository, message, artifact, and bucket becomes a high-value identity. Least privilege, segmentation, audit, retention, and incident procedures apply to the scanning service itself.

## AI-assisted development adds a pre-repository path

An AI coding tool can read files, terminal output, environment values, configuration, or command results before a commit exists. Prompts, conversation records, tool traces, and provider-side retention may create exposure outside Git.

GitGuardian documents hook integration for Cursor, Claude Code, Codex, Copilot CLI, VS Code, and Mistral Vibe to detect content before it reaches the model. This is an example of moving the control to a new transmission boundary rather than relying on a later repository scan. [GitGuardian AI integrations](https://docs.gitguardian.com/ggshield-docs/integrations/overview).

The design should also reduce what the agent can read. Workspace scoping, environment isolation, short-lived credentials, approved connectors, and redacted logs limit exposure even when detection misses a value.

## Coverage needs one inventory across all positions

A central view should connect the source inventory to the required control positions.

| Position             | Main decision                                 | Common limitation                                |
| -------------------- | --------------------------------------------- | ------------------------------------------------ |
| Editor or local hook | Warn before commit or push                    | Installation and bypass are developer controlled |
| Receive-time gate    | Accept or reject a remote push                | High-confidence patterns and host limits         |
| CI gate              | Permit merge or deployment                    | Content already reached the remote platform      |
| Scheduled discovery  | Find history, residue, and new-rule matches   | Detective and dependent on response capacity     |
| Wider-source scan    | Find exposure outside repositories            | Broad service-account access and data handling   |
| AI tool hook         | Permit content to reach a model or agent tool | Product-specific hook coverage and bypass        |

The inventory makes gaps discussable. It also prevents several green tools from being mistaken for complete coverage of one missing surface.
