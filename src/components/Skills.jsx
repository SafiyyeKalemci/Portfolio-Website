import React from "react";
import "./Skills.css";

function SkillBar({ name, level, color }) {
  return (
    <div className="skill">
      <div className="skill-info">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
          }}
        ></div>
      </div>
    </div>
  );
}

function ListItem({ name }) {
  return (
    <div className="list-item">
      <span className="check">✓</span>
      <span>{name}</span>
    </div>
  );
}

function LanguageItem({ name, level }) {
  return (
    <div className="language-item">
      <span>{name}</span>
      <span className="language-badge">{level}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      {/* Backend */}
      <div className="skills-container" data-aos="fade-up">
        <div className="skills-card backend">
          <h3>⚙️Backend</h3>
          <SkillBar name="Java" level={85} color="#7f5af0" />
          <SkillBar name="Spring Boot" level={75} color="#7f5af0" />
          <SkillBar name="PHP" level={70} color="#7f5af0" />
          <SkillBar name="REST API" level={75} color="#7f5af0" />
          <SkillBar name="C#" level={60} color="#7f5af0" />
          <SkillBar name="ASP.NET Core MVC" level={60} color="#7f5af0" />
        </div>

        {/* Frontend */}
        <div className="skills-card frontend">
          <h3>🖥️Frontend</h3>
          <SkillBar name="JavaScript" level={70} color="#3b82f6" />
          <SkillBar name="HTML/CSS" level={85} color="#3b82f6" />
          <SkillBar name="React" level={60} color="#3b82f6" />
        </div>

        {/* Database Technologies */}
        <div className="skills-card databases">
          <h3>🗃️Database Technologies</h3>
          <SkillBar name="MySQL" level={80} color="#10b981" />
          <SkillBar name="MSSQL" level={60} color="#10b981" />
        </div>

        {/* Tools & Platforms */}
        <div className="skills-card tools">
          <h3>🛠️Tools & Platforms</h3>
          <ListItem name="Git" />
          <ListItem name="VSCode" />
          <ListItem name="Maven" />
          <ListItem name="Eclipse" />
          <ListItem name="Power Automate" />
        </div>

        {/* Professional Skills */}
        <div className="skills-card professions">
          <h3>⭐Professional Skills</h3>
          <ListItem name="Problem Solving" />
          <ListItem name="OOP Principles" />
          <ListItem name="Teamwork" />
        </div>

        {/* Languages */}
        <div className="skills-card languages">
          <h3>🌍Languages</h3>
          <LanguageItem name="Turkish" level="Native" />
          <LanguageItem name="English" level="Professional" />
          <LanguageItem name="Italian" level="Beginner" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
