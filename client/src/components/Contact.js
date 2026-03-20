import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Get in Touch</h3>

          <p>
            <FaMapMarkerAlt className="icon" />
            <strong> Address:</strong><br/>
            123 Homecare Street,<br/>
            Chennai, Tamil Nadu
          </p>

          <p>
            <FaPhoneAlt className="icon" />
            <strong> Phone:</strong><br/>
            +91 98765 43210
          </p>

          <p>
            <FaEnvelope className="icon" />
            <strong> Email:</strong><br/>
            support@homecare.com
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-card">
          <h3>Book Your Service</h3>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Service Needed" />

          <textarea placeholder="Message"></textarea>

          <button className="btn-submit">Send Request</button>
        </div>

      </div>
    </section>
  );
}

export default Contact;
