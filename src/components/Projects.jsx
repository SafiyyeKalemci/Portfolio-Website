import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container"  data-aos="fade-up">
        {/*Research Project */}
        <div className="project-card featured">
          <span className="featured-badge">Research Project</span>
          <h3>Algorithmic Modeling of Multiplicative Hyperrings</h3>

          <p>
            Research project funded by TÜBİTAK 2209-A. Developed an algebraic
            computation engine using Spring Boot REST architecture and
            integrated a web-based interface. Presented at the 12th
            International IWW Conference. Patent and publication processes are
            ongoing.
          </p>
          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST API</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>JUnit 5</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/SafiyyeKalemci/HyperCrypt" target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
              View on Github
            </a>
            <a
              href="https://hypercrypt.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="live"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Hospital Management */}
        <div className="project-card">
          <h3>Hospital Management System</h3>
          <p>
            Full-stack system designed to manage clinical operations.
            Implemented RESTful backend services with Spring Boot and integrated
            with a web-based interface.
          </p>
          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST API</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/SafiyyeKalemci/HospitalManagementSystem" target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
              View on Github
            </a>
          </div>
        </div>

        {/* Movie Review */}
        <div className="project-card">
          <h3>MovieReview</h3>
          <p>
            Web application for movie listing and review management. Designed
            relational database interactions using PHP and MySQL.
          </p>
          <div className="tech-stack">
            <span>PHP</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/SafiyyeKalemci/MovieReview" target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
              View on Github
            </a>
          </div>
        </div>

        {/* Snake Game */}
        <div className="project-card">
          <h3>Snake Game (Java Swing)</h3>
          <p>
            Desktop-based Snake Game developed using Java Swing. Implemented
            game loop logic, collision detection, and score tracking.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>Java Swing</span>
            <span>OOP</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/SafiyyeKalemci/Snake-Game" target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
              View on Github
            </a>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/SafiyyeKalemci"
        target="_blank"
        rel="noopener noreferrer"
        className="view-all-btn"
         data-aos="fade-up"
      >
        View All Projects
      </a>{" "}
    </section>
  );
}

export default Projects;
