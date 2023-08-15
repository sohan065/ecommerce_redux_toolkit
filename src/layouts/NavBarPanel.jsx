import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function NavBarPanel() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ background: "gray" }}>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Navbar.Text style={{ marginRight: "15px" }}>
            <Nav.Link to="/signup" as={Link}>
              SignUp/Login
            </Nav.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              My Bag {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
