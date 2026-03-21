import React from "react";

function Home() {

  const handleWhatsApp = () => {
    window.open("https://wa.me/919840560072", "_blank"); // replace with your number
  };

  const handleCall = () => {
    window.location.href = "tel:+919840560072"; // replace with your number
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Care with Love & Compassion</h1>
        <p>Your health is our priority</p>

        <div className="buttons">
          <button className="btn whatsapp" onClick={handleWhatsApp}>
            WhatsApp
          </button>

          <button className="btn call" onClick={handleCall}>
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
