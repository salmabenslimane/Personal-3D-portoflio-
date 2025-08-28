// src/components/Experience/ExperienceCard.jsx
import React from "react";
import Card from "react-bootstrap/Card";

const ExperienceCard = ({ imgPath, title, description }) => {
  return (
    <Card className="experience-card-view" style={{ marginBottom: "20px" }}>
      <Card.Img
        variant="top"
        src={imgPath}
        alt="experience-img"
        style={{ height: "200px", objectFit: "contain", borderRadius: "10%" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
