import React from "react";
import "./Work.css";

function Work() {
  return (
    <section id="Work" className="work-section">
      <div className="work-title">
        <h2>My Experience</h2>
        <p>
          Showcasing Measurable Proficiency: Highlighting Specific, Teachable
          Abilities and Quantifiable Knowledge in my Portfolio.
        </p>
      </div>
      <div className="work-container">
        <div className="job">
          <h3>Software Developer Intern</h3>
          <h4>BitWit Techno, Ahmedabad</h4>
          <p>📅 May, 2024 - Sep, 2024</p>
          <ul>
            <li>
              Working ,on real-world projects involving Firebase for backend
              services, including authentication, integrated with React.
            </li>
            <li>
              Firebase real-time database to build applications that update data
              dynamically as users interact.
            </li>
          </ul>
        </div>
        <div className="job">
          <h3>Data Analyst Intern</h3>
          <h4>Zeetron Network, Jaipur</h4>
          <p>📅 May, 2023 - July, 2023</p>
          <ul>
            <li>
              Worked hands-on with data science libraries to implement machine
              learning solutions effectively
            </li>
            <li>
              Skilled in preparing, transforming, and analyzing data to derive
              actionable insights, using various data science tools.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Work;
