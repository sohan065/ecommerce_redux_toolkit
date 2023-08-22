import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function NavBarPanel() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ background: "gray" }}>
        <Navbar.Brand href="#" style={{ color: "cyan" }}>
          Redux Toolkit
        </Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link} style={{ color: "white" }}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Navbar.Text style={{ marginRight: "15px" }}>
            <Nav.Link to="/login" as={Link} style={{ color: "white" }}>
              SignUp/Login
            </Nav.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              <Badge
                badgeContent={cartProducts.length}
                color="secondary"
                max={99}>
                <ShoppingCartIcon style={{ color: "white" }} />
              </Badge>
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
