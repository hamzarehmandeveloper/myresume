import { React, useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import "../contectform/form.css";
import Contactme from "../../Assets/contactme.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/hamzarehman/google_sheets/aNWruFHTGAWJybcg?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              formData.Name,
              formData.Email,
              formData.Message,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({
          Name: "",
          Email: "",
          Message: "",
        });
        setSubmissionStatus("success");
      } else {
        console.error("Error submitting form:", response.statusText);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    }
  };

  useEffect(() => {
    if (submissionStatus === "success") {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

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
              {submissionStatus === "success" && (
                <Alert variant="success" className="mt-3">
                  Form submitted successfully!
                </Alert>
              )}
              {submissionStatus === "error" && (
                <Alert variant="danger" className="mt-3">
                  Error submitting form. Please try again later.
                </Alert>
              )}
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
