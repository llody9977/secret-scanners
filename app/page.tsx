import { capabilityArticles, operatingArticles } from "@/lib/catalog";
import { path } from "@/lib/site";

export default function Home() {
  return (
    <main id="main" className="overview">
      <section className="intro">
        <p className="eyebrow">Capability · Control design · Governance</p>
        <h1>Secret scanning.</h1>
        <p className="standfirst">
          Understand the signal.
          <br />
          Govern the decision.
        </p>
        <p className="intro-copy">
          Source repositories, build systems, artifacts, and collaboration tools are designed to
          copy and retain information. They are not approved stores for authentication material. A
          secret scanner can detect some credentials crossing that boundary, stop supported
          high-confidence exposures at an enforced gate, and provide evidence for an owned response.
          Its value depends on the configured rules, reachable sources, visible failures, and a team
          able to invalidate the exposed access.
        </p>
      </section>

      <section className="thesis">
        <h2>Use the guide as a decision path</h2>
        <p>
          Start with what a result can establish, then choose the event and source that need
          control. Use the operating articles to define ownership, failure handling, and a bounded
          evaluation. The scanner catalog is a dated shortlist for that evaluation, not proof that a
          product will work under a particular edition, configuration, permission model, or network
          boundary.
        </p>
      </section>

      {[
        { id: "capabilities", title: "Capabilities", articles: capabilityArticles },
        { id: "operating-model", title: "Operating model", articles: operatingArticles },
      ].map((series) => (
        <section key={series.id} className="series" aria-labelledby={series.id}>
          <div className="section-heading">
            <h2 id={series.id}>{series.title}</h2>
          </div>
          <div className="article-grid">
            {series.articles.map((article) => (
              <a
                className="article-card"
                key={article.slug}
                href={path(`/articles/${article.slug}/`)}
              >
                <span className="eyebrow">{article.topic}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span className="read-link">
                  Read article <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section className="thesis">
        <h2>The useful question is not which scanner wins.</h2>
        <p>
          The useful question is whether the chosen combination covers the highest-priority
          credential types and surfaces, fails visibly, and connects a finding to an owned response.
          Broader coverage can follow as inventory, platform authority, and operating capacity
          improve. The maintained <a href={path("/scanners/")}>scanner catalog</a> supports that
          decision without presenting a universal ranking.
        </p>
      </section>

      <section className="thesis">
        <h2>Part of the credential-risk lifecycle</h2>
        <p>
          This publication stays focused on detection and gatekeeping. The companion{" "}
          <a href="https://llody9977.github.io/secret-exposure/">Secret Exposure</a> publication
          covers business impact, security architecture, containment, recovery, governance, and
          reducing persistent secrets.
        </p>
      </section>
    </main>
  );
}
