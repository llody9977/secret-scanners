export const capabilityArticles = [
  {
    slug: "why-secret-scanning-exists",
    updated: "22 September 2026",
    topic: "Purpose",
    title: "Why organizations use secret scanning",
    description:
      "Credentials spread through systems built to copy and retain content. Scanning detects that control failure before it becomes unowned access.",
  },
  {
    slug: "what-a-scan-can-establish",
    updated: "22 September 2026",
    topic: "Boundaries",
    title: "What a secret scan can establish",
    description:
      "A finding, a clean result, and a failed scan support different decisions and need different evidence.",
  },
  {
    slug: "how-detection-evolved",
    updated: "22 September 2026",
    topic: "Evolution",
    title: "How secret detection evolved",
    description:
      "Patterns, entropy, context, validation, and learned classification answer different questions about a candidate value.",
  },
  {
    slug: "scanner-landscape",
    updated: "22 September 2026",
    topic: "Landscape",
    title: "Reading the scanner landscape",
    description:
      "Open engines, service-backed clients, commercial platforms, and repository-host controls leave different work with the operator.",
  },
  {
    slug: "where-scanners-run",
    updated: "22 September 2026",
    topic: "Coverage",
    title: "Where secret scanners are used",
    description:
      "Local files, Git history, receive-time gates, pipelines, artifacts, collaboration systems, and endpoints expose different surfaces.",
  },
] as const;

export const operatingArticles = [
  {
    slug: "centralizing-the-gate",
    updated: "22 September 2026",
    topic: "Control design",
    title: "Centralizing the gate without slowing delivery",
    description:
      "A governed service connects fast feedback, enforceable boundaries, discovery, exceptions, and response without running every engine everywhere.",
  },
  {
    slug: "ai-and-secret-scanning",
    updated: "22 September 2026",
    topic: "AI and LLMs",
    title: "What AI changes in secret scanning",
    description:
      "AI can widen detection and assist triage while agent prompts, file reads, and tool calls create another exposure path to govern.",
  },
  {
    slug: "selecting-a-scanner",
    updated: "22 September 2026",
    topic: "Selection",
    title: "Selecting a scanner without a false leaderboard",
    description:
      "Requirements, controlled tests, operating responsibility, and failure handling provide a stronger decision record than a decontextualized score.",
  },
] as const;

export const articles = [...capabilityArticles, ...operatingArticles] as const;
