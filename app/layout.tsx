import type { Metadata } from "next";
import { path, origin } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Secret Scanning | Capability, controls and governance",
    template: "%s | Secret Scanning",
  },
  description:
    "An operational decision guide to secret-scanner capabilities, deployment points, coordinated gates, AI-assisted detection, and governance.",
  icons: { icon: path("/favicon.svg") },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <a className="wordmark" href={path("/")}>
            Secret Scanning
            <span className="brand-dot" aria-hidden="true">
              .
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href={path("/")}>Overview</a>
            <a href={path("/scanners/")}>Scanners</a>
            <a href={path("/references/")}>References</a>
            <a href="https://github.com/llody9977/secret-scanners">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>Secret Scanning</span>

          <a href={path("/references/#editorial-approach")}>Editorial approach</a>
        </footer>
      </body>
    </html>
  );
}
