import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
export default function SignUp() {
  const [user, setUser] = useState({});
  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="container-fluid"
      style={{
        width: "300px",
        textAlign: "left",
        border: "2px solid gray",
      }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleNameChange}
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleNameChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleNameChange}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
          }}>
          <Button variant="primary" type="submit">
            <Nav.Link to="/login" as={Link}>
              Login
            </Nav.Link>
          </Button>
          <Button variant="primary" type="submit">
            Registration
          </Button>
        </div>
      </Form>
    </div>
  );
}
