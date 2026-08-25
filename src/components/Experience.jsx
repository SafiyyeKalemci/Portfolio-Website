import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="exp-timeline" data-aos="fade-up">
        {/* FUCHS Lubricants Türkiye */}
        <div className="exp-item">
          <div className="exp-dot"></div>
          <div className="exp-content">
            <span className="exp-date">July 2026 - Aug 2026</span>
            <h3>
              FUCHS Lubricants Türkiye
              <span className="exp-role-inline">— IT Intern</span>
            </h3>
            <ul>
              <li>
                Developed a full-stack User Management Panel using C# and
                ASP.NET Core MVC, implementing CRUD operations, role-based
                authentication (Identity), and Data Transfer Objects (DTOs).
              </li>
              <li>
                Created automated workflows using Microsoft Power Automate and
                explored Power Platform tools.
              </li>
              <li>
                Analyzed enterprise platform workflows (Agora/SAP) and drafted
                functional IT requirement reports.
              </li>
            </ul>
          </div>
        </div>

        {/* IAU Technology Development Center */}
        <div className="exp-item">
          <div className="exp-dot"></div>
          <div className="exp-content">
            <span className="exp-date">Feb 2026 - April 2026</span>
            <h3>
              IAU Technology Development Center
              <span className="exp-role-inline">— Web Development Intern</span>
            </h3>
            <ul>
              <li>
                Built and launched a production-ready website for the university
                using WordPress, optimizing content structure, responsive
                design, and plugins to enhance usability and performance.
              </li>
            </ul>
          </div>
        </div>

        {/* IAU Corporate Communications Directorate */}
        <div className="exp-item">
          <div className="exp-dot"></div>
          <div className="exp-content">
            <span className="exp-date">Oct 2025 - Jan 2026</span>
            <h3>
              IAU Corporate Communications Directorate
              <span className="exp-role-inline">— Web Development Intern</span>
            </h3>
            <ul>
              <li>
                Developed backend modules using PHP and built interface
                components with HTML/CSS/JavaScript.
              </li>
              <li>
                Collaborated with the development team on ongoing web
                development projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
