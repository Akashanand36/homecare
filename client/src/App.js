import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

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

      {/* ✅ FLOATING BUTTONS INSIDE RETURN */}
      <div className="floating-buttons">

        {/* 📞 CALL */}
        <a href="tel:+919876543210" className="float-btn call-btn">
          <FaPhoneAlt />
        </a>

        {/* 💬 WHATSAPP */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn whatsapp-btn"
        >
          <FaWhatsapp />
        </a>

      </div>
    </>
  );
}

export default App;
