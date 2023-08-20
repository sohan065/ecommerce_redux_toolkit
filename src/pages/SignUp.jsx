import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
export default function SignUp() {
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/create",
        user
      );
      if (response.status === 201) {
        setSuccess(true);
        setError(null);
        setUser({ name: "", email: "", password: "" });
      } else {
        setSuccess(false);
        setError("Failed to create user");
      }
    } catch (error) {
      setSuccess(false);
      setError("failed");
    }
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
            value={user.name}
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
            value={user.email}
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
            value={user.password}
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
            Submit
          </Button>
        </div>
      </Form>
      {error && (
        <Alert key="danger" variant="danger">
          {error}
        </Alert>
      )}
      {success && (
        <Alert key="primary" variant="primary">
          Success
        </Alert>
      )}
    </div>
  );
}
