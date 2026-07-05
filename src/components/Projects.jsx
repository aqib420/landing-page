import { projects, profile, keyResearchProjects } from "../data/content";

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-white/10 p-6 hover:border-accent-light/60 hover:bg-white/[0.03] transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-white font-medium">{project.title}</h3>
        <span className="text-gray-500 text-xs font-mono shrink-0 group-hover:text-accent-light transition-colors">
          ↗
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-2 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-accent-light bg-accent/10 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-5xl mx-auto py-24 border-t border-white/10">
      <p className="font-mono text-accent-light text-sm mb-2">03. Projects</p>
      <h2 className="text-3xl font-semibold text-white mb-4">Featured Work</h2>
      <p className="text-gray-400 max-w-2xl mb-12 text-sm leading-relaxed">
        A selection of projects spanning applied ML/NLP, backend engineering,
        and DevOps. Source for all of these is public on GitHub.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.repo} project={p} />
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-16 mb-6">
        Additional Research Projects
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {keyResearchProjects.map((p) => (
          <div key={p.title} className="rounded-xl border border-white/10 p-6">
            <h4 className="text-white font-medium">{p.title}</h4>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-5 py-3 rounded-lg border border-white/15 text-gray-200 text-sm font-medium hover:border-white/40 transition-colors"
        >
          View all repositories on GitHub →
        </a>
      </div>
    </section>
  );
}
