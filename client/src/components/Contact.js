import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/ajax/premashomecare@gmail.com", {
      method: "POST",
      body: formData
    });

    setSuccess(true);
    e.target.reset();
  };

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
                  href="https://share.google/Ojco5MuZwExsh9YNO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Prema'S Homecare <br />
                 Rishabam Foundation No:14/15 , Hariram Building, College Road,Nungambakkam,<br />
                  India,Tamilnadu,Chennai-600006
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
                <a href="tel:+919840560072">+91 9840560072</a>
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:premashomecare@gmail.com">
                  premashomecare@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="contact-card">
          <h3>Book Your Service</h3>

          <input name="name" type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email Address" required />
          <input name="phone" type="tel" placeholder="Phone Number" required />
          <input name="service" type="text" placeholder="Service Needed" />

          <textarea name="message" placeholder="Message" required></textarea>

          {/* Hidden Fields */}
          <input type="hidden" name="_subject" value="New HomeCare Booking!" />
          <input type="hidden" name="_captcha" value="false" />

          <button type="submit" className="btn-submit">
            Send Request
          </button>
        </form>

      </div>

      {/* ✅ POPUP */}
      {success && (
        <div className="popup">
          <div className="popup-box">
            <h3>✅ Request Sent!</h3>
            <p>We will contact you soon 😊</p>
            <button onClick={() => setSuccess(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
