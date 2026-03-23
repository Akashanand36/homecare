import React from "react";
import { FaAmbulance, FaUserMd, FaHeartbeat, FaFlask, FaBrain, FaWheelchair } from "react-icons/fa";

function Services() {
  return (
    <section className="section" id="services">
      <h2>Our Services</h2>

      <div className="services-grid">

         <div className="service-card">
          <FaBrain className="icon" />
          <h3>Neuro Care</h3>
          <p>Advanced neurological treatments.</p>
        </div>

          <div className="service-card">
          <FaHeartbeat className="icon" />
          <h3>Myo Care</h3>
          <p>Comprehensive care & recovery support.</p>
        </div>

        <div className="service-card">
          <FaWheelchair className="icon" />
          <h3>Geriatric Care</h3>
          <p>Special care for elderly patients.</p>
        </div>

       <div className="service-card">
          <FaUserMd className="icon" />
          <h3>Doctor on call</h3>
          <p>Doctor consultation at home.</p>
        </div>
        
        <div className="service-card">
          <FaAmbulance className="icon" />
          <h3>Ambulance</h3>
          <p>24/7 emergency ambulance support.</p>
        </div>

           <div className="service-card">
          <FaFlask className="icon" />
          <h3>Lab Services</h3>
          <p>Home sample collection with fast reports.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;
