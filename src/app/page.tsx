import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Teams from "../components/Teams";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Teams />
      <Contact />
      <Footer />
    </>
  );
}