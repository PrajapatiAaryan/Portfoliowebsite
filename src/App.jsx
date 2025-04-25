import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Educationpage from "./pages/Educationpage";
import Skillspage from "./pages/Skillspage";
import Projectpage from "./pages/Projectpage";
import Servicepage from "./pages/Servicepage";
import Footer from "./components/Footer";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <>
      <div className="scrollbar-custom">
        <Navbar />
        <section id="home">
          <Homepage />
        </section>
        <section id="about">
          <Aboutpage />
        </section>
        <section id="education">
          <Educationpage />
        </section>
        <section id="skills">
          <Skillspage />
        </section>
        <section id="service">
          <Servicepage />
        </section>
        <section id="projects">
          <Projectpage />
        </section>
        <section id="contact">
          <Contactpage />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;

