import React from 'react'
import './Project.css'
import project1 from '../../assests/project1.png'
import Project2 from '../../assests/chatapp.png';
import project3 from '../../assests/invoice.png';

const Project = () => {
  return (
    <div>
      <section id="project">
        <h2 className="projectTitle">My Project</h2>
        <span className="projectP">
          Redundant alt attribute. Screen-readers already announce `img` tags as
          an image. You don’t need to use the words `image`
        </span>
        <div className="projectDiv">
          <div className="projectt">
            <img src={project1} alt="shopswap" className="projectImg" />
            <h1>Nova</h1>
            <p>
              The e-commerce website is developed by mern stack<br /> user-friendly product management.{" "}
            </p>
            <a
              href="https://github.com/MaheshChoudhary063/Nova-E-commerce-ReactJs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projectB">See Project</button>{" "}
            </a>
          </div>
          <div className="projectt">
            <img src={project3} alt="shopswap" className="projectImg" />
            <h1>Invoicify</h1>
            <p>
              Invoicify pplication built using the MERN stack.
              <br /> for managing invoices{" "}
            </p>
            <a
              href="https://github.com/MaheshChoudhary063/Invoicify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projectB">See Project</button>{" "}
            </a>
          </div>
          <div className="projectt">
            <img src={Project2} alt="shopswap" className="projectImg" />
            <h1>ChatFill</h1>
            <p>
              ChatFill developed with Node.js and Socket.io. <br /> Enable users
              to create and join group chats.
            </p>
            <a
              href="https://github.com/MaheshChoudhary063/ChatFill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projectB">See Project</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project