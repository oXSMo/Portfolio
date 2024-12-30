import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <main  className="max-w-[100vw] grid relative bg-black overflow-hidden">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
