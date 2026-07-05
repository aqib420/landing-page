import demoVideo from "../assets/media/penny-demo.mp4";
import demoPoster from "../assets/media/penny-demo-poster.jpg";

export default function Demo() {
  return (
    <section id="demo" className="py-24 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <p className="font-mono text-accent-light text-sm mb-2">Live Product Demo</p>
        <h2 className="text-3xl font-semibold text-white mb-4">
          Penny — AI Blog Content Agent
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8 text-sm leading-relaxed">
          A production agent I built at BigGorillaApps: it researches
          keywords, drafts a fully structured blog post in real time, runs an
          SEO quality check, then publishes it. Muted clip, full app is
          proprietary to the client.
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 max-w-4xl">
          <video
            className="w-full h-auto block"
            src={demoVideo}
            poster={demoPoster}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>
    </section>
  );
}
