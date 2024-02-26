import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../about/about.css";
import SkillPic from "../../Assets/skills-pic.png";

export default function about() {
  return (
    <>
      <Container
        className="aboutcontainer"
        style={{ paddingTop: 30, paddingBottom: 30, textAlign: "center" }}
      >
        <Col>
          <h1 id="about">About</h1>
        </Col>
        <Col>
          <h1 style={{ padding: 0, marginTop: 50 }}>
            Professional <span>Problem Solutions</span> For Digital Products
          </h1>
        </Col>
        <Row className="skills-con">
          <Col className="para-con" sm={12} lg={6}>
            <p id="paragraph" style={{ paddingBottom: 0, marginBottom: 0 }}>
              A dedicated Software Developer with expertise in Flutter, Dart,
              Firebase, React, and a strong foundation in JavaScript, CSS, HTML,
              MUI, Bootstrap, and Git. Passionate about creating efficient and
              innovative solutions, I thrive in collaborative environments where
              my skills in mobile and web development can contribute to
              impactful projects.
            </p>
            <br />
            <blockquote style={{ textAlign: "left" }}>
              <p>"Strive to build things that make a difference!"</p>
              <footer>- Hamza Rehman</footer>
            </blockquote>
          </Col>
          <Col sm={12} lg={6}>
            <Container className="skills-pic" style={{ padding: 0 }}>
              <img src={SkillPic} alt="skills" />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
