export type ScannerProfile = {
  name: string;
  category:
    | "Open source"
    | "Open client and service"
    | "Commercial platform"
    | "Repository platform";
  status: string;
  activity: string;
  activitySource: string;
  detection: string;
  surfaces: string;
  validation: string;
  enforcement: string;
  operatingNote: string;
  source: string;
};

export const scanners: ScannerProfile[] = [
  {
    name: "Gitleaks",
    category: "Open source",
    status: "Active",
    activity:
      "Release v8.30.1 on 21 March 2026; upstream push on 9 September 2026. The project describes itself as feature complete.",
    activitySource: "https://github.com/gitleaks/gitleaks/releases/tag/v8.30.1",
    detection: "Configurable regular expressions, keywords, entropy, allowlists, and decoding",
    surfaces: "Files, directories, Git working trees, commits, and history",
    validation: "No built-in live provider validation in the documented core workflow",
    enforcement: "Local hooks, CI, and scheduled scans supplied by the operator",
    operatingNote:
      "A mature portable engine with a widely used rule format. Central governance, routing, and exception review remain external.",
    source: "https://github.com/gitleaks/gitleaks",
  },
  {
    name: "Betterleaks",
    category: "Open source",
    status: "Active",
    activity: "Release v1.8.1 on 18 August 2026; upstream activity verified on 22 September 2026.",
    activitySource: "https://github.com/betterleaks/betterleaks/releases/tag/v1.8.1",
    detection:
      "Gitleaks-compatible rules with expression filters, token-efficiency checks, decoding, and optional validation",
    surfaces:
      "Files, Git history, GitHub and GitLab resources, CI logs and artifacts, Hugging Face, and object storage",
    validation: "Optional rule-driven HTTP and cloud-provider validation",
    enforcement: "Local hooks and CI supplied by the operator",
    operatingNote:
      "Broad source coverage increases access and data-handling responsibilities. Validation is disabled unless deliberately enabled.",
    source: "https://github.com/betterleaks/betterleaks",
  },
  {
    name: "TruffleHog",
    category: "Open source",
    status: "Active",
    activity:
      "Release v3.97.5 on 16 September 2026; upstream activity verified on 22 September 2026.",
    activitySource: "https://github.com/trufflesecurity/trufflehog/releases/tag/v3.97.5",
    detection: "Provider detectors, decoding, structural checks, and verification-aware results",
    surfaces:
      "Git, filesystems, CI systems, cloud storage, container registries, package sources, and other connectors",
    validation: "Live provider verification for supported credential families",
    enforcement: "CI and discovery workflows supplied by the operator",
    operatingNote:
      "Verification can prioritize active credentials, but outbound checks need authorization and an inconclusive check is not proof of invalidity.",
    source: "https://github.com/trufflesecurity/trufflehog",
  },
  {
    name: "detect-secrets",
    category: "Open source",
    status: "Maintained with a slower release cadence",
    activity:
      "Default-branch activity on 2 April 2026. The latest tagged release remains v1.5.0 from 6 May 2024.",
    activitySource: "https://github.com/Yelp/detect-secrets/commits/master/",
    detection:
      "Provider plugins, keyword rules, entropy checks, heuristics, filters, and selected plugin verification",
    surfaces: "Files and staged or tracked content, with baseline-oriented operation",
    validation: "Plugin-dependent verification",
    enforcement: "Pre-commit and CI supplied by the operator",
    operatingNote:
      "Its baseline model is useful when an estate cannot remediate every existing candidate before preventing new ones.",
    source: "https://github.com/Yelp/detect-secrets",
  },
  {
    name: "git-secrets",
    category: "Open source",
    status: "Limited recent activity",
    activity:
      "Repository is not archived, but the latest upstream push was 17 September 2025 and no GitHub release is published. Reassess before new adoption.",
    activitySource: "https://github.com/awslabs/git-secrets/commits/master/",
    detection:
      "Configured prohibited and allowed regular-expression patterns, including AWS-oriented helpers",
    surfaces: "Files, staged changes, commits, commit messages, merges, and optional history scans",
    validation: "Pattern matching rather than live credential validation",
    enforcement: "Repository-local Git hooks",
    operatingNote:
      "Simple and understandable, but hook installation is per clone and normally remains developer bypassable.",
    source: "https://github.com/awslabs/git-secrets",
  },
  {
    name: "Secretlint",
    category: "Open source",
    status: "Active",
    activity: "Release v13.0.5 on 27 August 2026; upstream activity verified on 22 September 2026.",
    activitySource: "https://github.com/secretlint/secretlint/releases/tag/v13.0.5",
    detection: "Pluggable secret rules and message-level allow directives",
    surfaces: "Files and developer or CI workflows in the JavaScript ecosystem",
    validation: "Rule dependent",
    enforcement: "Local and CI integration supplied by the operator",
    operatingNote:
      "Useful where an extensible lint workflow fits existing delivery practices. Coverage follows the installed rule set.",
    source: "https://github.com/secretlint/secretlint",
  },
  {
    name: "Kingfisher",
    category: "Open source",
    status: "Active",
    activity:
      "Release v2.5.0 on 18 September 2026; upstream activity verified on 22 September 2026.",
    activitySource: "https://github.com/mongodb/kingfisher/releases/tag/v2.5.0",
    detection:
      "Accelerated patterns, language-aware context, decoding, parser checks, and extensive rule metadata",
    surfaces:
      "Git, code hosts, cloud storage, documents, archives, chat, collaboration systems, containers, and packages",
    validation: "HTTP, cloud, database, token, and deterministic validators for supported rules",
    enforcement: "Local and CI integration supplied by the operator",
    operatingNote:
      "Breadth and direct validation make authorization, rate limits, credential handling, and report access part of the design.",
    source: "https://github.com/mongodb/kingfisher",
  },
  {
    name: "Titus",
    category: "Open source",
    status: "Active",
    activity: "Release v1.2.9 on 31 August 2026; upstream activity verified on 21 September 2026.",
    activitySource: "https://github.com/praetorian-inc/titus/releases/tag/v1.2.9",
    detection:
      "Accelerated patterns, context, risk scoring, document extraction, and rule-based detection",
    surfaces:
      "Files, Git history, GitHub, GitLab, containers, office documents, archives, HTTP traffic, and browser content",
    validation: "Live provider validation and selected scope assessment",
    enforcement: "CLI, reusable CI, library, and security-testing extensions",
    operatingNote:
      "The browser and proxy extensions are assessment tools with their own safety boundaries, not organization-wide preventive gates.",
    source: "https://github.com/praetorian-inc/titus",
  },
  {
    name: "Trivy",
    category: "Open source",
    status: "Active",
    activity:
      "Trivy release v0.74.0 on 14 August 2026; upstream activity verified on 22 September 2026.",
    activitySource: "https://github.com/aquasecurity/trivy/releases/tag/v0.74.0",
    detection: "Secret rules integrated with broader vulnerability and misconfiguration scanning",
    surfaces: "Filesystems, repositories, container images, and related build artifacts",
    validation: "Secret detection is not primarily organized around live provider validation",
    enforcement: "Local, CI, and platform integrations supplied by the operator",
    operatingNote:
      "A practical choice when secret detection is one part of an existing Trivy control, but its broader product scope should not be mistaken for universal secret coverage.",
    source: "https://www.trivy.dev/docs/latest/guide/scanner/secret/",
  },
  {
    name: "GitGuardian and ggshield",
    category: "Open client and service",
    status: "Active service and open-source client",
    activity:
      "ggshield release v1.54.0 on 26 August 2026; product documentation updated on 31 August 2026.",
    activitySource: "https://github.com/GitGuardian/ggshield/releases/tag/v1.54.0",
    detection:
      "Service-backed provider and generic detectors, validity checks, and contextual analysis",
    surfaces:
      "Local development, CI, VCS platforms, containers, endpoints, public GitHub, collaboration systems, and custom document sources",
    validation: "Provider-dependent validity checks",
    enforcement:
      "Hooks, pre-receive integration, CI, monitored repositories, and incident workflows",
    operatingNote:
      "The CLI is open source but normally calls the GitGuardian API. Connectivity, data flow, plan, and fail-open or fail-closed behavior need explicit decisions.",
    source: "https://docs.gitguardian.com/ggshield-docs/home",
  },
  {
    name: "Semgrep Secrets",
    category: "Commercial platform",
    status: "Current commercial product",
    activity:
      "Current first-party product documentation verified on 22 September 2026; Semgrep engine release v1.177.0 published on 10 September 2026.",
    activitySource: "https://github.com/semgrep/semgrep/releases/tag/v1.177.0",
    detection:
      "Patterns, entropy, semantic analysis, AI-assisted generic detection, and contextual post-processing",
    surfaces: "Repositories, developer workflows, pull requests, and CI",
    validation: "Built-in and custom local HTTP validation for supported rules",
    enforcement: "Policy-driven allow, comment, or block decisions in development workflows",
    operatingNote:
      "Semantic and learned analysis can add context, while entitlement and data-processing boundaries still need to be checked for the selected deployment.",
    source: "https://semgrep.dev/products/semgrep-secrets",
  },
  {
    name: "GitHub Secret Protection",
    category: "Repository platform",
    status: "Current repository-platform capability",
    activity:
      "GitHub shipped secret-scanning pattern and workflow improvements in 2026, including pull-request enforcement on 9 September 2026.",
    activitySource:
      "https://github.blog/changelog/2026-09-09-block-pull-requests-with-exposed-secrets-from-merging/",
    detection: "Provider patterns, generic patterns, custom patterns, and AI-detected passwords",
    surfaces:
      "GitHub repositories, history, issues, pull requests, discussions, wikis, and supported package surfaces",
    validation: "Validity and extended metadata for selected provider patterns and eligible plans",
    enforcement:
      "Host receive-time push protection, alerts, bypass review, and organization configuration",
    operatingNote:
      "Capabilities differ by pattern category and entitlement. AI-detected passwords currently do not receive push protection or validity checks.",
    source:
      "https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns",
  },
  {
    name: "GitLab Secret Detection",
    category: "Repository platform",
    status: "Current repository-platform capability",
    activity:
      "Current first-party documentation verified on 22 September 2026; the overview received a substantive product-documentation update on 11 March 2026.",
    activitySource:
      "https://gitlab.com/gitlab-org/gitlab/-/commit/770cb85388f59e4bc36099db2ad744050a084972",
    detection: "Rule-based provider and generic detection with customizable analyzer rulesets",
    surfaces:
      "Receive-time pushes, repository pipelines, history scans, and issue or merge-request text through separate controls",
    validation:
      "Selected automatic response and Duo-assisted false-positive assessment are product and tier dependent",
    enforcement:
      "Pre-receive push protection, pipeline findings, approval workflows, and security policies",
    operatingNote:
      "Push protection, pipeline scanning, and client-side text detection are separate modes with different coverage and editions.",
    source: "https://docs.gitlab.com/user/application_security/secret_detection/",
  },
];

export const checkedOn = "22 September 2026";
