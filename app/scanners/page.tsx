import type { Metadata } from "next";
import { checkedOn, scanners } from "@/lib/scanners";
import { path } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scanner catalog",
  description:
    "A dated, non-ranked catalog of representative open-source, commercial, and repository-platform secret scanners.",
  alternates: { canonical: path("/scanners/") },
};

export default function ScannerCatalog() {
  return (
    <main id="main" className="references catalog-page">
      <p className="eyebrow">Dated capability reference</p>
      <h1>Scanner catalog.</h1>
      <div className="catalog-intro">
        <p className="standfirst">Representative tools, not a universal ranking.</p>
        <p>
          Inclusion reflects visible adoption, current relevance, or a materially distinct
          capability. It does not establish product quality or suitability. Product names, editions,
          and documented behavior were checked on {checkedOn}.
        </p>
        <p>
          The catalog supports shortlisting. It does not replace a configured test of the exact
          edition, permissions, network path, rules, and failure behavior available to the adopting
          organization.
        </p>
      </div>

      <section className="activity-method" aria-labelledby="activity-method-title">
        <h2 id="activity-method-title">How maintenance was checked</h2>
        <p>
          Open-source status uses the upstream archive state, default-branch activity, and published
          releases. Hosted products require current first-party documentation plus a dated product,
          documentation, client, or engine change. Activity does not establish quality or
          suitability.
        </p>
      </section>

      <div
        className="catalog-table-wrap"
        role="region"
        aria-label="Scanner comparison"
        tabIndex={0}
      >
        <table className="catalog-table">
          <thead>
            <tr>
              <th scope="col">Scanner</th>
              <th scope="col">Maintenance</th>
              <th scope="col">Detection and validation</th>
              <th scope="col">Coverage and enforcement</th>
              <th scope="col">Operating boundary</th>
            </tr>
          </thead>
          <tbody>
            {scanners.map((scanner) => (
              <tr key={scanner.name}>
                <th scope="row" data-label="Scanner">
                  <a className="scanner-name" href={scanner.source}>
                    {scanner.name} ↗
                  </a>
                  <span className="scanner-category">{scanner.category}</span>
                </th>
                <td data-label="Maintenance">
                  <span
                    className={`scanner-status ${scanner.status.startsWith("Limited") ? "needs-review" : ""}`}
                  >
                    {scanner.status}
                  </span>
                  <span className="activity-evidence">
                    {scanner.activity} <a href={scanner.activitySource}>Verify ↗</a>
                  </span>
                </td>
                <td data-label="Detection and validation">
                  <span>{scanner.detection}</span>
                  <span className="secondary-detail">
                    <strong>Validation</strong> {scanner.validation}
                  </span>
                </td>
                <td data-label="Coverage and enforcement">
                  <span>{scanner.surfaces}</span>
                  <span className="secondary-detail">
                    <strong>Enforcement</strong> {scanner.enforcement}
                  </span>
                </td>
                <td data-label="Operating boundary">{scanner.operatingNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="catalog-boundary">
        <h2>How to use this catalog</h2>
        <p>
          Treat each row as a starting point for a dated evaluation. Confirm the required edition,
          exact rule set, enabled sources, network behavior, report handling, and failure mode in
          the target environment. A documented feature is not evidence that it was enabled or
          effective in a particular organization.
        </p>
      </section>
    </main>
  );
}
