const NODES = [
  { label: "Plan", x: 220, y: 60 },
  { label: "Execute", x: 380, y: 220 },
  { label: "Verify", x: 220, y: 380 },
  { label: "Review", x: 60, y: 220 },
];

const RING_PATH = "M220,60 A160,160 0 1,1 220,380 A160,160 0 1,1 220,60";

export default function HeroVisual() {
  return (
    <div
      aria-hidden
      className="relative hidden lg:flex items-center justify-center h-full min-h-[480px]"
    >
      <div className="absolute w-72 h-72 rounded-full bg-accent/25 blur-[100px] animate-[float-slow_7s_ease-in-out_infinite]" />
      <div className="absolute w-56 h-56 rounded-full bg-teal-400/10 blur-[90px] translate-x-16 -translate-y-10 animate-[float-slow_9s_ease-in-out_infinite]" />

      <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-white/10 animate-[spin-slow_40s_linear_infinite]" />
      <div className="absolute w-[340px] h-[340px] rounded-full border border-white/5 animate-[spin-reverse-slow_55s_linear_infinite]" />

      <svg viewBox="-30 -20 500 480" className="relative w-full max-w-[440px] h-auto">
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d={RING_PATH}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {NODES.map((n) => (
          <line
            key={`spoke-${n.label}`}
            x1="220"
            y1="220"
            x2={n.x}
            y2={n.y}
            stroke="#a78bfa"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        ))}

        <circle cx="220" cy="220" r="46" fill="url(#hubGlow)" opacity="0.7" />
        <circle
          cx="220"
          cy="220"
          r="22"
          fill="#0b0c10"
          stroke="#a78bfa"
          strokeWidth="1.5"
        />
        <text
          x="220"
          y="225"
          textAnchor="middle"
          className="fill-white"
          fontSize="11"
          fontFamily="ui-monospace, Consolas, monospace"
        >
          Agent
        </text>

        {NODES.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r="7"
              fill="#2dd4bf"
              className="animate-[node-pulse_3s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <circle cx={n.x} cy={n.y} r="4" fill="#0b0c10" stroke="#2dd4bf" strokeWidth="1.5" />
            <text
              x={
                n.label === "Execute"
                  ? n.x + 16
                  : n.label === "Review"
                    ? n.x - 16
                    : n.x
              }
              y={n.label === "Plan" ? n.y - 18 : n.label === "Verify" ? n.y + 28 : n.y + 4}
              textAnchor={
                n.label === "Execute" ? "start" : n.label === "Review" ? "end" : "middle"
              }
              className="fill-gray-300"
              fontSize="13"
              fontFamily="ui-monospace, Consolas, monospace"
            >
              {n.label}
            </text>
          </g>
        ))}

        {[0, 1].map((i) => (
          <circle key={i} r="4" fill="#c4b5fd">
            <animateMotion
              dur="6s"
              begin={`${i * 3}s`}
              repeatCount="indefinite"
              path={RING_PATH}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
