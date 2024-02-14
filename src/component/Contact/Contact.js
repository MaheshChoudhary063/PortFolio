import React, { useRef } from "react";
import gtihb from "../../assests/github.png";
import linkdin from "../../assests/linkdin.png";
import leetCode from "../../assests/LeetCode.png";
import insta from "../../assests/insta.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Submitting form:", form.current);
    emailjs
      .sendForm(
        "service_edon67d",
        "template_dc15aqe",
        form.current,
        "A8H9TJLYBMFdMCImm"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Emal Submit");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h1 className="contactTitle">Contact Me</h1>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="Conname"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="Conemail"
          placeholder="Enter Your Email"
          name="your_email"
        />
        <input
          type="number"
          className="ConNo"
          placeholder="Enter Your Phone No."
          name="your_number"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="ConSubBut">
          Submit
        </button>
        <div className="links">
          {/* <img src={gtihb} alt="gtihub" className="link" /> */}
          <a
            href="https://github.com/MaheshChoudhary063"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gtihb} alt="GitHub" className="link" />
          </a>

          {/* <img src={linkdin} alt="linkdin" className="link" /> */}
          <a
            href="https://www.linkedin.com/in/mahesh-choudhary-2aa138243/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkdin} alt="LinkedIn" className="link" />
          </a>

          {/* <img src={leetCode} alt="leetcode" className="link" /> */}
          <a
            href="https://leetcode.com/mahesh_63/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leetCode} alt="LeetCode" className="link" />
          </a>
          <a
            href="https://www.instagram.com/maheshchoudharry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="insta" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
