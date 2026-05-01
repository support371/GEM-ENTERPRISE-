import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GEM Enterprise | Defend. Protect. Prevail.',
  description: 'Institutional-grade cybersecurity, financial security, and real estate protection for qualified clients.'
};

const nav = [
  ['Services', '/services'],
  ['Intel', '/intel'],
  ['Hub', '/hub'],
  ['Community', '/community'],
  ['Resources', '/resources'],
  ['Company', '/company']
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container navbar-inner">
            <Link className="brand" href="/"><span className="brand-mark">G</span><span>GEM Enterprise</span></Link>
            <nav className="nav-links" aria-label="Primary">
              {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            </nav>
            <div className="nav-actions">
              <Link className="btn" href="/client-login">Client Login</Link>
              <Link className="btn primary" href="/get-started">Get Started</Link>
            </div>
            <details>
              <summary className="mobile-summary">Menu</summary>
              <div className="mobile-panel">
                <div className="mobile-grid">
                  {[...nav, ['Contact', '/company'], ['Client Login', '/client-login'], ['Get Started', '/get-started']].map(([label, href]) => <Link className="btn" key={href} href={href}>{label}</Link>)}
                </div>
              </div>
            </details>
          </div>
        </header>
        {children}
        <footer className="footer"><div className="container">© 2026 GEM Enterprise. Defend. Protect. Prevail.</div></footer>
      </body>
    </html>
  );
}
