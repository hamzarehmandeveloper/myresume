import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar expand="sm" className="nav">
      <Container fluid className="main_navbar_container">
        <Navbar.Toggle aria-controls="navbarScroll" className="toggle-button" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav_header me-auto my-lg-0">
            <Nav.Link className="links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="links" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="links" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="links" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="links" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
