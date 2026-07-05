import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 max-w-5xl mx-auto py-24 border-t border-white/10">
      <p className="font-mono text-accent-light text-sm mb-2">04. Skills</p>
      <h2 className="text-3xl font-semibold text-white mb-12">Technical Skills</h2>
      <div className="grid sm:grid-cols-2 gap-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-white font-medium mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono text-gray-300 border border-white/10 px-2.5 py-1.5 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
