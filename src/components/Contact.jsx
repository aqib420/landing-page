import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="px-6 max-w-5xl mx-auto py-24 border-t border-white/10 text-center">
      <p className="font-mono text-accent-light text-sm mb-2">05. Contact</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
        Let's build something.
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        I'm open to AI engineering roles and freelance projects involving
        agentic systems, RAG, and production ML. Reach out anytime.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="inline-block px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
      >
        {profile.email}
      </a>
      <div className="flex justify-center gap-6 text-gray-400 text-sm mt-8">
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          LinkedIn
        </a>
        <span>{profile.phone}</span>
      </div>
    </section>
  );
}
