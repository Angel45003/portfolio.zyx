import React from "react";
import BentoGrid from "./components/BentoGrid";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Contact";

function App() {
  return (
    <main>
      <section>
        <Hero />
        <BentoGrid />
        <Projects />
        <Footer />
      </section>
    </main>
  );
}

export default App;
