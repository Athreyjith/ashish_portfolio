import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I’ve worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Powered Ayurvedic Drug Recommendation System"
              description="Built an NLP-based recommendation engine using TF-IDF preprocessing and Machine Learning models to classify and recommend Ayurvedic drugs. Integrated FastAPI backend with a React.js frontend using Axios for real-time predictions."
              ghLink="https://github.com/yourusername/ayurvedic-drug-recommendation"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="SMS Spam Detection System"
              description="Developed a spam detection system using Naive Bayes and SVM classifiers with TF-IDF vectorization. Built a complete ML pipeline with Flask REST API integration and MongoDB storage."
              ghLink="https://github.com/yourusername/sms-spam-detection"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Real-Time Artistic Image Converter"
              description="Created a real-time computer vision application using OpenCV that applies artistic filters on live webcam feeds with optimized low-latency rendering."
              ghLink="https://github.com/yourusername/artistic-image-converter"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Blog Idea Generator API"
              description="Designed a production-ready REST API using FastAPI with Swagger documentation, modular routing, and Pydantic validation for improved reliability."
              ghLink="https://github.com/yourusername/blog-idea-generator-api"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;