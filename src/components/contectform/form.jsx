import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../contectform/form.css";
import Contactme from "../../Assets/contactme.png";

const ContactForm = () => {
  return (
    <Container className="contact-form-container">
      <Row>
        <Col xs={12} md={6} className="right-column">
          <img id="myImage" src={Contactme} alt="My Image" />
        </Col>
        <Col>
          <h2>Contact Me</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                required
              />
            </Form.Group>
            <br />

            <Col id="button-con">
              <Button
                className="button"
                style={{ marginTop: 20 }}
                variant="outline-dark"
                size="lg"
              >
                Submit
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
