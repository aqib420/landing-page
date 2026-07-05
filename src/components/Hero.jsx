import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 blur-[120px] rounded-full pointer-events-none"
      />
      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16">
        <p className="font-mono text-accent-light text-sm mb-4 tracking-wide">
          Hi, I'm
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
          {profile.name}
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl text-gray-300 font-medium">
          {profile.title}
        </h2>
        <p className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-5 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-lg border border-white/15 text-gray-200 text-sm font-medium hover:border-white/40 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        <div className="mt-10 flex gap-5 text-gray-400 text-sm">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
