import { education } from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-6 max-w-5xl mx-auto py-24 border-t border-white/10">
      <p className="font-mono text-accent-light text-sm mb-2">01. About</p>
      <h2 className="text-3xl font-semibold text-white mb-10">Background</h2>
      <div className="grid sm:grid-cols-2 gap-10">
        <div>
          <h3 className="text-white font-medium mb-2">Education</h3>
          <p className="text-gray-300">{education.school}</p>
          <p className="text-gray-500 text-sm">{education.location}</p>
          <p className="text-gray-300 mt-2">{education.degree}</p>
          <p className="text-gray-500 text-sm">{education.years}</p>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            {education.focus}
          </p>
        </div>
        <div>
          <h3 className="text-white font-medium mb-2">What I focus on</h3>
          <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
            <li>Designing production LangGraph multi-agent systems</li>
            <li>RAG pipelines and semantic search at scale</li>
            <li>Shipping FastAPI backends with real-time streaming</li>
            <li>Turning research (NLP, forecasting) into revenue-impacting products</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
