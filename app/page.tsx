import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <About/>
      <Services/>
      <FAQ/>
      <Contact/>
    </div>
  );
}
