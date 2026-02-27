import React from "react";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="timeline">
        {/* Dalga SVG */}
        <svg
          className="timeline-wave"
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
        >
          <path
            d=" M100 0
                Q180 200 100 400
                Q20 600 100 800"
            fill="none"
            stroke="#6657eb"
            strokeWidth="3"
          />

          {/* Üst Nokta (sağ tepe) */}
          <circle
            cx="140"
            cy="200"
            r="9"
            fill="#0284c7"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="180"
            y1="200"
            x2="260"
            y2="200"
            stroke="#0284c7"
            strokeWidth="2"
          />

          {/* Alt Nokta (sol tepe) */}
          <circle
            cx="60"
            cy="600"
            r="9"
            fill="#6657eb"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="20"
            y1="600"
            x2="-60"
            y2="600"
            stroke="#6657eb"
            strokeWidth="2"
          />
        </svg>
        {/*İAÜ */}
        <div className="timeline-item right">
          <div className="content">
            <span className="date">2022 - Present</span>
            <h3>Istanbul Aydin University</h3>
            <p>Computer Engineering</p>
          </div>
        </div>

        {/*Trento */}
        <div className="timeline-item left">
          <div className="content">
            <span className="date">February 2025 - July 2025</span>
            <h3>University of Trento</h3>
            <p>Erasmus Exchange Program</p>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Education;
