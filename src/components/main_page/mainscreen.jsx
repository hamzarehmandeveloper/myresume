import { React } from "react";
import "../main_page/mainScreen.css";
import Footer from "../footer/footer.jsx";
import ContactForm from "../contectform/form.jsx";
import myImage from "../../Assets/myimage.png";
import CVpdf from "../../Assets/HamzaCV.pdf";
import linkedin from "../../Assets/linkedIn.png";
import github from "../../Assets/github.png";
import { Row, Col, Container, Button } from "react-bootstrap";
import About from "../about/about.jsx";
import Skills from "../skills/skills.jsx";

const MainScreen = () => {
  return (
    <>
      <Container id="mainSection">
        <Row className="main-container">
          <Col xs={12} md={6} className="left-column">
            <div id="hero">
              <h1>
                HELLO<span></span>
              </h1>
              <h1>
                MY NAME IS <span></span>
              </h1>
              <h1 id="name">
                HAMZA REHMAN <span></span>
              </h1>
            </div>

            <p style={{ padding: 0 }}>SOFTWARE ENGINEER</p>
            <Container style={{ padding: 0 }}>
              <Row>
                <ul className="stackList">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>Flutter</li>
                  <li>Dart</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                </ul>
              </Row>
              <Row id="logocontainer">
                <Col>
                  <a
                    href="https://www.linkedin.com/in/hamzarehmandeveloper/"
                    target="_blank"
                  >
                    <img className="logo" src={linkedin} alt="linkedIn" />
                  </a>
                  <a
                    href="https://github.com/hamzarehmandeveloper"
                    target="_blank"
                  >
                    <img className="logo" src={github} alt="linkedIn" />
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="button"
                    style={{ marginTop: 20 }}
                    variant="outline-dark"
                    size="lg"
                    href={CVpdf}
                    download
                  >
                    Download CV
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="right-column">
            <img className="myImage" src={myImage} alt="My Image" />
          </Col>
        </Row>
      </Container>
      <Col sm={12}>
        <About />
      </Col>
      <Skills />
      <ContactForm />
      <Footer />
    </>
  );
};

export default MainScreen;
