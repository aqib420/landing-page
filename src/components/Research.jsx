import { research } from "../data/content";

function Paper({ paper }) {
  const doiUrl = `https://doi.org/${paper.doi}`;
  return (
    <article className="rounded-xl border border-white/10 p-6 sm:p-8 grid lg:grid-cols-[1fr_220px] gap-8 hover:border-white/20 transition-colors">
      <div>
        <p className="font-mono text-xs text-accent-light mb-3">Technical report · Habib University · Zenodo</p>
        <h3 className="text-white text-lg font-medium leading-snug">{paper.title}</h3>
        <p className="text-gray-500 text-sm mt-2">
          {paper.authors.split(", ").map((a, i, all) => (
            <span key={a}>
              <span className={a === "A. Ansari" ? "text-gray-200 font-medium" : ""}>{a}</span>
              {i < all.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <ul className="mt-5 space-y-3">
          {paper.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href={doiUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-accent/15 text-accent-light hover:bg-accent/25 transition-colors"
          >
            Read the report ↗
          </a>
          <a
            href={paper.code}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-white/15 text-gray-200 hover:border-white/40 transition-colors"
          >
            Code ↗
          </a>
        </div>
        <p className="mt-4 font-mono text-xs text-gray-600">DOI {paper.doi}</p>
      </div>
      <dl className="grid grid-cols-2 lg:grid-cols-1 gap-4 content-start">
        {paper.stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-white/[0.03] border border-white/5 px-4 py-3">
            <dt className="text-xl font-semibold text-white">{s.value}</dt>
            <dd className="text-xs text-gray-500 mt-0.5">{s.label}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function Research() {
  return (
    <section id="research" className="py-24 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <p className="font-mono text-accent-light text-sm mb-2">03. Research</p>
        <h2 className="text-3xl font-semibold text-white mb-4">Published Research</h2>
        <p className="text-gray-400 max-w-2xl mb-12 text-sm leading-relaxed">
          Applied research in low-resource NLP, audio classification, and
          computer vision. Each technical report is published on Zenodo with
          the code open on GitHub.
        </p>
        <div className="space-y-6 max-w-5xl">
          {research.map((p) => (
            <Paper key={p.doi} paper={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
