import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <p className="contact-text">
        I'm open to internship and collaboration opportunities. Feel free to
        reach out!
      </p>

      <div className="contact-links">
        <a href="mailto:kalemcisafiyye@gmail.com">
          <MdEmail className="contact-icon email" /> Email
        </a>

        <a href="https://www.linkedin.com/in/safiyye-kalemci-61b587273/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon linkedin" />{" "}
          LinkedIn
        </a>

        <a href="https://github.com/SafiyyeKalemci" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon github" /> GitHub
        </a>
      </div>

      <p className="copyright">© 2026 Safiyye Kalemci. All rights reserved.</p>
    </section>
  );
}

export default Contact;
