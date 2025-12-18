import "./App.css";
import Navbar from "./components/Navbar";
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
          {/* <div
            className="
              pointer-events-none
               bottom-0 left-0 w-full
              h-40 md:h-56
              bg-linear-to-b from-[#1D1F25] to-[#EDEDE2]
            "
          /> */}

        <section
          id="portfolio"
          className="panel overflow-y-auto bg-[#1D1F25]"
        >
          <Portfolio />
        </section>
      </div>
    </>
  );
}
