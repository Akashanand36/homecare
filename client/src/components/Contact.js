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

  {/* ADDRESS */}
  <div className="contact-item">
  <FaMapMarkerAlt className="contact-icon" />
  <div>
    <h4>Address</h4>
    <p>
      <a
        href="https://www.google.com/maps/search/?api=1&query=123+Homecare+Street+Chennai"
        target="_blank"
        rel="noopener noreferrer"
      >
        123 Homecare Street,<br />
        Chennai, Tamil Nadu
      </a>
    </p>
  </div>
</div>


  {/* PHONE */}
  <div className="contact-item">
    <FaPhoneAlt className="contact-icon" />
    <div>
      <h4>Phone</h4>
      <p>
        <a href="tel:+919876543210">+91 98765 43210</a>
      </p>
    </div>
  </div>

  {/* EMAIL */}
  <div className="contact-item">
    <FaEnvelope className="contact-icon" />
    <div>
      <h4>Email</h4>
      <p>
        <a href="mailto:support@homecare.com">
          support@homecare.com
        </a>
      </p>
    </div>
  </div>
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
