import { experience } from "../data/content";

function Bullet({ item }) {
  const lead = typeof item === "string" ? null : item.lead;
  const text = typeof item === "string" ? item : item.text;
  return (
    <li className="flex gap-3 text-gray-400 text-sm leading-relaxed">
      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
      <span>
        {lead && <span className="text-gray-200 font-medium">{lead}: </span>}
        {text}
      </span>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <p className="font-mono text-accent-light text-sm mb-2">02. Experience</p>
        <h2 className="text-3xl font-semibold text-white mb-12">Work History</h2>
        <div className="space-y-16 max-w-4xl">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-4 mb-6 border-b border-white/10">
                <div>
                  <h3 className="text-white font-medium">{job.role}</h3>
                  <p className="text-accent-light text-sm">
                    {job.company} · {job.location}
                  </p>
                </div>
                <p className="text-gray-500 text-sm font-mono shrink-0">
                  {job.period}
                </p>
              </div>
              {job.summary && (
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {job.summary}
                </p>
              )}
              <div className="space-y-8">
                {job.groups.map((group, i) => (
                  <div key={group.name ?? i}>
                    {group.name && (
                      <p className="mb-3">
                        <span className="text-gray-100 font-medium text-sm">
                          {group.name}
                        </span>
                        {group.tagline && (
                          <span className="text-gray-500 text-sm"> — {group.tagline}</span>
                        )}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {group.bullets.map((b, j) => (
                        <Bullet key={j} item={b} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
