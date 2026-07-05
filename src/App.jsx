import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0c10]">
      <Nav />
      <Hero />
      <Demo />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
