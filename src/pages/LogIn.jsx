import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function LogIn() {
  const [credentials, setCredentials] = useState({});
  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
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

        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
          }}>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button variant="primary" type="submit">
            <Nav.Link to="/signup" as={Link}>
              Registration
            </Nav.Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}
