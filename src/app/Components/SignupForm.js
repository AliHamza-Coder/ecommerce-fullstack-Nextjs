import React from "react";
import "../styles/SignupForm.css";

const SignupForm = ({ onClose, toggleForm }) => {
  return (
    <div className="form-outer-container">
      <div className="form-container signup-form-container">
        <i
          className="fa-regular form-closeIcon fa-circle-xmark"
          onClick={onClose}
        ></i>
        <form className="signup-form">
          <h1 className="form-title">Create Account</h1>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-links">
            <a onClick={toggleForm} href="#">Already have an account?</a>
            <a onClick={toggleForm} href="#">Login Here</a>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
