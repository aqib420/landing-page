import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-colors ${
        scrolled ? "bg-[#0b0c10]/90 backdrop-blur border-b border-white/10" : ""
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 max-w-[1600px] mx-auto">
        <a href="#top" className="font-mono text-sm text-white tracking-tight">
          aquib<span className="text-accent-light">.dev</span>
        </a>
        <ul className="hidden sm:flex gap-8 text-sm text-gray-300">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="sm:hidden text-gray-300"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-6 pb-4 text-gray-300 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
