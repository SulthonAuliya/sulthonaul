import "./App.css";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";

export default function App() {

  return (
    <>
      <Navbar />

      <div
        id="sections"
        className="relative h-screen w-full"
      >

        <section id="hero" className="panel h-screen overflow-y-hidden md:overflow-y-auto bg-[#1D1F25] relative">
          <Hero />

        </section>
        <section
          id="portfolio"
          className="panel overflow-y-auto bg-[#1D1F25]"
        >
          <Portfolio />
        </section>

        <section 
          id="experience"
          className="panel overflow-y-auto bg-[#1D1F25]">
            <Experience/>
        </section>
      </div>
    </>
  );
}
