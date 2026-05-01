const pillars = [
  'Cybersecurity operations',
  'Advanced financial services',
  'Enterprise risk intelligence',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          GEM Enterprise
        </p>
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Enterprise-grade cybersecurity and financial intelligence.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A strategic command layer for security posture, operational resilience,
          and advanced financial-services workflows.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-base font-semibold text-slate-100">{pillar}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
