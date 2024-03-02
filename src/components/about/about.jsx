import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../about/about.css";
import SkillPic from "../../Assets/skills-pic.png";

export default function About() {
  return (
    <Container className="aboutcontainer">
      <Row className="justify-content-center">
        <Col xs={12}>
          <h1 id="about">About</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={8}>
          <h1 className="main-heading">
            Professional <span>Problem Solutions</span> For Digital Products
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} lg={6}>
          <p className="about-paragraph">
            A dedicated Software Developer with expertise in Flutter, Dart,
            Firebase, React, and a strong foundation in JavaScript, CSS, HTML,
            MUI, Bootstrap, and Git. Passionate about creating efficient and
            innovative solutions, I thrive in collaborative environments where
            my skills in mobile and web development can contribute to impactful
            projects.
          </p>
          <br />
          <blockquote className="blockquote">
            <p>"Strive to build things that make a difference!"</p>
            <footer>- Hamza Rehman</footer>
          </blockquote>
        </Col>
        <Col xs={12} lg={6}>
          <div className="text-center">
            <img src={SkillPic} alt="skills" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
