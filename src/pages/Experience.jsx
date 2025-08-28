// src/pages/experience.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from '../components/Experience/ExperienceCard';


import Particle from "../components/Particle";
import exp1 from "../assets/experiences/exp1.png";
import exp2 from "../assets/experiences/exp2.png";

const Experience = () => {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="yellow">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few professional experiences I’ve had recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="experience-card">
            <ExperienceCard
              imgPath={exp1}
              title="Experience 1"
              description="Description of your first experience goes here."
            />
          </Col>

          <Col md={6} className="experience-card">
            <ExperienceCard
              imgPath={exp2}
              title="Experience 2"
              description="Description of your second experience goes here."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
