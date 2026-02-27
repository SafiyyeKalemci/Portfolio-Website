import React from "react";
import "./Hero.css";
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="hero"className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Safiyye Kalemci</h1>
          <h2>Computer Engineering Student</h2>
          <p>
            I am a 3rd-year Computer Engineering student at İstanbul Aydın University with a strong interest in backend development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
          
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Safiyye Kaleci" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
