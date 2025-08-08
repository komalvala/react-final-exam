import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login, register as registerAction } from "../redux/auth/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await dispatch(registerAction(email, password));
      } else {
        await dispatch(login(email, password));
      }
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message || "Auth error");
    }
  };

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className="p-4">
          <h3 className="mb-3 text-center">{isRegister ? "Register" : "Login"}</h3>
          <Form onSubmit={submit}>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <Button type="submit">{isRegister ? "Register" : "Login"}</Button>
              <Button variant="link" onClick={() => setIsRegister((s) => !s)}>
                {isRegister ? "Have an account? Login" : "New? Register"}
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
