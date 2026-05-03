import Link from 'next/link';

const stats = [['500+', 'Enterprise Clients'], ['99.97%', 'Uptime SLA'], ['$2.8B+', 'Assets Protected'], ['24/7', 'SOC Coverage']];
const pillars = [
  ['Cybersecurity', 'Advanced threat intelligence, SOC-as-a-service, vulnerability management, and incident response for enterprise environments.', '/intel', 'Explore Threat Intel'],
  ['Financial Security', 'Asset recovery, fraud mitigation, regulatory compliance, and portfolio-level financial risk monitoring for institutional clients.', '/services', 'Asset Protection'],
  ['Real Estate Protection', 'Title fraud prevention, deed monitoring, and property-level security intelligence for high-value real estate portfolios.', '/services', 'Property Security']
];
const capabilities = ['Threat Intelligence', 'Asset Protection', 'Secure Transactions', 'Portfolio Management', 'Compliance Monitoring', 'Intel Briefs'];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <span className="badge">GEM Enterprise Platform — 2026</span>
          <h1><span className="gradient-text">Defend.</span> Protect. Prevail.</h1>
          <p className="lede">GEM Enterprise delivers institutional-grade cybersecurity, financial security, and real estate protection for qualified clients. Threat intelligence. Asset recovery. Compliance. All from a single command platform.</p>
          <div className="cta-row"><Link className="btn primary" href="/get-started">Get Started →</Link><Link className="btn" href="/intel">View Intel ›</Link></div>
          <div className="status-strip"><span className="status-item"><span className="dot" />SOC Active — 3 Regions</span><span className="status-item"><span className="dot cyan" />3,847 IOCs Loaded</span><span className="status-item"><span className="dot yellow" />14 Threats Under Analysis</span></div>
        </div>
      </section>
      <section className="section alt"><div className="container grid cols-4">{stats.map(([value, label]) => <div className="metric card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
      <section className="section"><div className="container"><div className="section-head"><span className="badge">Core Services</span><h2>Three Pillars of <span className="gradient-text">Enterprise Protection</span></h2><p>Integrated security across your digital, financial, and physical assets — managed from a single authenticated command platform.</p></div><div className="grid cols-3">{pillars.map(([title, body, href, cta]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p><Link className="card-link" href={href}>{cta} →</Link></article>)}</div></div></section>
      <section className="section alt"><div className="container"><div className="section-head"><span className="badge">Platform Capabilities</span><h2>Everything Your Enterprise <span className="gradient-text">Needs</span></h2><p>Six integrated capability domains unified in the GEM command platform and available through authenticated client access.</p></div><div className="grid cols-3">{capabilities.map((item) => <div className="card" key={item}><h3>{item}</h3><p>Operational dashboards, evidence workflows, and secure service coordination for qualified teams.</p></div>)}</div></div></section>
      <section className="section"><div className="container section-head"><span className="badge">Qualified Client Access</span><h2>Secure Your <span className="gradient-text">Enterprise Today</span></h2><p>Begin KYC onboarding to access the full platform, or sign in to your existing client account.</p><div className="cta-row"><Link className="btn primary" href="/get-started">Start KYC</Link><Link className="btn" href="/client-login">Client Login</Link></div></div></section>
    </main>
  );
}
