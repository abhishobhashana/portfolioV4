import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Layout() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
