import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}
