import React from "react";
import "../footer/footer.css";
import { Row, Col } from "react-bootstrap";
import linkedin from "../../Assets/linkedIn.png";
import github from "../../Assets/github.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Hamza Rehman</p>
      <Row id="logocontainer">
        <Col>
          <a
            href="https://www.linkedin.com/in/hamzarehmandeveloper/"
            target="_blank"
          >
            <img className="logo" src={linkedin} alt="linkedIn" />
          </a>
          <a href="https://github.com/hamzarehmandeveloper" target="_blank">
            <img className="logo" src={github} alt="linkedIn" />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
