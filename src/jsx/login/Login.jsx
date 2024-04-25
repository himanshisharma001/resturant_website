import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./login.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Validate input on change
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Invalid email address",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password:
            value.length < 6
              ? "Password must be at least 6 characters long"
              : "",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submitting
    validateInput("email", formData.email);
    validateInput("password", formData.password);

    // Check if there are no errors
    if (Object.values(errors).every((error) => error === "")) {
      // Perform login or submit data
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <>
      <Header />
      <div className="login-bg-box">
        <div className="login-box-bg">
          <h3 className="login-page-hdg">Log In</h3>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Enter your email id ..."
                className="log-input-box"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter your password ..."
                className="log-input-box"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="text-center mt-3">
              <button className="cnt-btn-vw" type="submit">
                Log In
              </button>
            </div>
            <p className="new-user-fntsz">
              New User ? <NavLink to="/signup">Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

const AlertBox = () => {
  return (
    <>
      <Modal>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>Form is submitted !</Modal.Body>
      </Modal>
    </>
  );
};
