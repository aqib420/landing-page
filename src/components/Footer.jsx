import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 max-w-5xl mx-auto py-8 border-t border-white/10 text-center text-gray-500 text-xs">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </p>
    </footer>
  );
}
