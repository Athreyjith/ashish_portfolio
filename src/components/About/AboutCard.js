import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Ashish B</span> 
           
            <br />
            I’m a passionate{" "}
            <span className="purple">
              Frontend & Full Stack Developer
            </span>{" "}
            with a Bachelor’s degree in{" "}
            <span className="purple">Computer Science Engineering</span>.
            <br />
            I specialize in building{" "}
            <span className="purple">
              scalable web applications
            </span>{" "}
            using modern technologies like React.js, Node.js, FastAPI, and
            Python.
            <br />
            <br />
            I have hands-on experience with{" "}
            <span className="purple">
              REST APIs, Redux Toolkit, MongoDB, MySQL, CI/CD pipelines,
            </span>{" "}
            and Agile development workflows.
            <br />
            <br />
            Currently, I focus on creating responsive applications,
            integrating backend services, and developing intelligent systems
            powered by Machine Learning and NLP.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Full Stack Web Apps 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & Machine Learning 🤖
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building technology that solves real-world problems!"
          </p>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;