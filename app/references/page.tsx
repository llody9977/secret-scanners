import type { Metadata } from "next";
import { path } from "@/lib/site";

export const metadata: Metadata = {
  title: "References and evidence",
  description:
    "Primary sources, review date, and evidence boundaries for the Secret Scanning publication.",
  alternates: { canonical: path("/references/") },
};

const sources = [
  [
    "PCI DSS v4.0.1 document library",
    "https://www.pcisecuritystandards.org/document_library/",
    "The current PCI DSS standard and supporting material, including secure software development requirements.",
  ],
  [
    "NIST Secure Software Development Framework v1.1",
    "https://csrc.nist.gov/pubs/sp/800/218/final",
    "PW.7 code review and analysis practices, including continuous automated checks and owned remediation.",
  ],
  [
    "NIST SP 800-53 Revision 5",
    "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    "IA-5 authenticator management and the wider control context for protecting and revoking authentication material.",
  ],
  [
    "CIS Control 16",
    "https://cas8.docs.cisecurity.org/en/latest/source/Controls16/",
    "Application security lifecycle safeguards, including code-level static and dynamic analysis under Safeguard 16.12.",
  ],
  [
    "OWASP ASVS v5 secret management",
    "https://cornucopia.owasp.org/taxonomy/asvs-5.0/13-configuration/03-secret-management",
    "V13.3.1 requires managed backend secrets and excludes them from source code and build artifacts.",
  ],
  [
    "OpenSSF secret scanning",
    "https://best.openssf.org/SCM-BestPractices/github/repository/secret_scanning.html",
    "Direct repository detection and push-protection guidance from the OpenSSF Best Practices Working Group.",
  ],
  [
    "MITRE CWE-798",
    "https://cwe.mitre.org/data/definitions/798",
    "Hard-coded credential variants, access-control consequences, introduction paths, and mitigations.",
  ],
  [
    "CISA and NSA top cybersecurity misconfigurations",
    "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-278a",
    "Operational guidance on poor credential hygiene and cleartext credential disclosure.",
  ],
  [
    "GitHub supported secret scanning patterns",
    "https://docs.github.com/en/code-security/reference/secret-security/supported-secret-scanning-patterns",
    "Pattern categories and the different alert, push-protection, validity, metadata, and encoding capabilities.",
  ],
  [
    "GitHub secret scanning scope",
    "https://docs.github.com/en/code-security/reference/secret-security/secret-scanning-scope",
    "Documented surfaces and limits for background scanning and push protection.",
  ],
  [
    "GitHub custom patterns",
    "https://docs.github.com/en/code-security/concepts/secret-security/custom-patterns",
    "Organization-specific patterns and optional push protection.",
  ],
  [
    "GitHub push protection",
    "https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection",
    "Receive-time blocking, bypass behavior, and the relationship between push protection and secret-scanning alerts.",
  ],
  [
    "GitLab secret detection",
    "https://docs.gitlab.com/user/application_security/secret_detection/",
    "The relationship between push protection, pipeline scanning, client-side detection, response, and Duo assessment.",
  ],
  [
    "GitLab secret push protection",
    "https://docs.gitlab.com/user/application_security/secret_detection/secret_push_protection/",
    "Pre-receive behavior, exclusions, bypass, limits, and rollout guidance.",
  ],
  [
    "GitLab pipeline secret detection",
    "https://docs.gitlab.com/user/application_security/secret_detection/pipeline/",
    "Pipeline timing, history behavior, output, editions, and security-policy integration.",
  ],
  [
    "Bitbucket Data Center secret scanning",
    "https://confluence.atlassian.com/spaces/SECURITY/pages/1409092176/Secret%2Bscanning",
    "Native Bitbucket Data Center scanning. This source is not treated as a Bitbucket Cloud capability.",
  ],
  [
    "Bitbucket Cloud pipes",
    "https://support.atlassian.com/bitbucket-cloud/docs/use-pipes-in-bitbucket-pipelines/",
    "Portable and third-party controls in Bitbucket Cloud pipelines.",
  ],
  [
    "Gitleaks",
    "https://github.com/gitleaks/gitleaks",
    "Rule structure, entropy, allowlists, local hooks, and CI use.",
  ],
  [
    "Betterleaks scanning",
    "https://github.com/betterleaks/betterleaks/blob/main/docs/scanning.md",
    "Supported inputs across files, Git, code hosts, CI resources, Hugging Face, and storage.",
  ],
  [
    "Betterleaks configuration",
    "https://github.com/betterleaks/betterleaks/blob/main/docs/config.md",
    "Filters, rule configuration, validation, and outbound request controls.",
  ],
  [
    "TruffleHog",
    "https://github.com/trufflesecurity/trufflehog",
    "Detection, supported sources, result states, and credential verification.",
  ],
  [
    "detect-secrets",
    "https://github.com/Yelp/detect-secrets",
    "Plugins, entropy, filters, baselines, audits, and developer workflows.",
  ],
  [
    "git-secrets",
    "https://github.com/awslabs/git-secrets",
    "Prohibited patterns, AWS helpers, hook installation, and history scans.",
  ],
  [
    "Secretlint",
    "https://github.com/secretlint/secretlint",
    "Extensible lint rules and developer integration.",
  ],
  [
    "Kingfisher",
    "https://github.com/mongodb/kingfisher",
    "Language-aware scanning, source coverage, validation, revocation, and reporting.",
  ],
  [
    "Titus",
    "https://github.com/praetorian-inc/titus",
    "Rule coverage, validation, extraction, containers, and assessment-tool interfaces.",
  ],
  [
    "Trivy secret scanning",
    "https://www.trivy.dev/docs/latest/guide/scanner/secret/",
    "Secret rules within the broader Trivy scanner.",
  ],
  [
    "GitGuardian ggshield",
    "https://docs.gitguardian.com/ggshield-docs/home",
    "Service-backed CLI behavior and local or CI integration.",
  ],
  [
    "GitGuardian integration overview",
    "https://docs.gitguardian.com/ggshield-docs/integrations/overview",
    "AI coding tools, IDEs, CI, hooks, containers, and document-source integration.",
  ],
  [
    "GitGuardian source integrations",
    "https://docs.gitguardian.com/internal-monitoring/integrate-sources/overview",
    "Monitored source categories and centralized incident handling.",
  ],
  [
    "Semgrep Secrets",
    "https://semgrep.dev/products/semgrep-secrets",
    "Semantic analysis, entropy, validation, custom rules, and developer workflows.",
  ],
  [
    "Semgrep custom validators",
    "https://semgrep.dev/docs/semgrep-secrets/validators",
    "Local HTTP validation structure and custom result states.",
  ],
  [
    "Semgrep Agentic Workflows",
    "https://docs.semgrep.dev/workflows/overview",
    "The boundary between deterministic tools and constrained AI-assisted reasoning.",
  ],
  [
    "OWASP Secrets Management Cheat Sheet",
    "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
    "The wider creation, storage, use, rotation, revocation, and retirement lifecycle.",
  ],
] as const;

export default function References() {
  return (
    <main id="main" className="references">
      <p className="eyebrow">Primary sources</p>
      <h1>References.</h1>
      <div className="reference-grid">
        <div className="prose">
          <h2 id="editorial-approach">Evidence and interpretation</h2>
          <p>
            Product capabilities are attributed to official documentation or upstream repositories.
            A documented capability is not represented as enabled, observed, or effective in a
            particular environment.
          </p>
          <p>
            Open-source engine, open client backed by a service, commercial platform, and
            repository-host capability remain separate operating models. Product and edition
            boundaries stay beside claims that depend on them.
          </p>
          <h2>Review date</h2>
          <p>
            Sources and product profiles were checked on 22 September 2026. Rules, editions,
            connectors, and maintenance status can change. Implementation decisions need a current
            check against the selected product and plan.
          </p>
          <h2>Historical evidence</h2>
          <p>
            Results migrated from the retiring repositories remain under the repository research
            directory with their original dates, versions, corpora, and limitations. They are not
            current rankings and do not appear in the scanner catalog.
          </p>
          <h2>Corrections</h2>
          <p>
            Corrections should be raised in the repository issue tracker after publication with
            supporting evidence. Live credentials, raw matches, and sensitive validation responses
            do not belong in those records.
          </p>
        </div>
        <ol className="reference-list">
          {sources.map(([title, url, note]) => (
            <li key={url}>
              <a href={url}>{title} ↗</a>
              <p>{note}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
