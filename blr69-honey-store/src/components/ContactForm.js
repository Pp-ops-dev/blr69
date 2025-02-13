import React from "react";
import "../styles/home.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>For inquiries, feel free to reach out to us.</p>

        <div className="contact-details">
          <p>📞 Mobile: <a href="tel:+919848660734">9848660734</a></p>
          <p>📧 Email: <a href="mailto:blr69honey@gmail.com">blr69honey@gmail.com</a></p>
          <p>💬 WhatsApp: <a href="https://wa.me/919848660734" target="_blank">Chat on WhatsApp</a></p>
        </div>

        <form id="contactForm" className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
