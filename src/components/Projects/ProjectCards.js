import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* Title */}
          <Card.Title
            style={{
              marginBottom: "15px",
              textAlign: "center",
              fontWeight: "600",
              minHeight: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.title}
          </Card.Title>

          {/* Description */}
          <Card.Text
            style={{
              textAlign: "justify",
              minHeight: "150px",
              lineHeight: "1.7",
            }}
          >
            {props.description}
          </Card.Text>
        </div>

        {/* GitHub Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;