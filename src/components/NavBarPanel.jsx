import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
export default function NavBarPanel() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              My Bag
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
