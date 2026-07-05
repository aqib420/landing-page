import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 max-w-5xl mx-auto py-24 border-t border-white/10">
      <p className="font-mono text-accent-light text-sm mb-2">02. Experience</p>
      <h2 className="text-3xl font-semibold text-white mb-12">Work History</h2>
      <div className="space-y-14">
        {experience.map((job) => (
          <div key={job.company} className="grid sm:grid-cols-[220px_1fr] gap-4 sm:gap-8">
            <div>
              <h3 className="text-white font-medium">{job.role}</h3>
              <p className="text-accent-light text-sm">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.location}</p>
              <p className="text-gray-500 text-sm mt-1">{job.period}</p>
            </div>
            <div className="space-y-5 border-l border-white/10 pl-6">
              {job.highlights.map((h) => (
                <div key={h.title}>
                  <p className="text-gray-200 font-medium text-sm">{h.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
