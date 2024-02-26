import { React, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../contectform/form.css";
import Contactme from "../../Assets/contactme.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(formData);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxySKQi5V-sPz1B2mINBXgHci5unl1NuE2e60eF9zxoWNivysqOtDeL6CyOW22ZfL-WrA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully!");
      } else {
        // Handle error
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container className="contact-form-container" id="contect">
      <Row>
        <Col xs={12} md={6} className="right-column">
          <img id="myImage" src={Contactme} alt="My Image" />
        </Col>
        <Col>
          <h2>Contact Me</h2>
          <Form className="contactForm" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name="Name"
                value={formData.Name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                name="Email"
                value={formData.Email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                name="Message"
                value={formData.Message}
                rows={4}
                placeholder="Enter your message"
                onChange={handleChange}
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
                type="submit"
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
