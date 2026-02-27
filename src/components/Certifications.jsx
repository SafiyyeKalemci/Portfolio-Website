import React from "react";
import "./Certifications.css";
import IWW2025 from "../assets/IWW2025.pdf";
import JAVA_BTK from "../assets/JAVA_BTK.pdf";
import IBM from "../assets/IBM.pdf"

function Certifications() {
  return (
    <section className="certification">
      <h2>Certifications & Conferences</h2>
      <div className="cert-container">
        <div className="cert-card">
          <h3>12th International IWW Conference 2025</h3>
          <p>
            İstanbul Teknik Üniversitesi
          </p>
          <a href={IWW2025} target="_blank" rel="noopener noreferrer">
            📄 View Certificate
          </a>
        </div>
        <div className="cert-card">
          <h3>JAVA ile Programlamaya Giriş</h3>
          <p>
            BTK Akademi
          </p>
          <a href={JAVA_BTK} target="_blank" rel="noopener noreferrer">
            📄 View Certificate
          </a>
        </div>
        <div className="cert-card">
          <h3>IBM ile Kodluyoruz: CyberStart</h3>
          <p>Kodluyoruz x IBM</p>
          <a href={IBM} target="_blank" rel="noopener noreferrer">
            📄 View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
