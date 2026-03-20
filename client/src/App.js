import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;