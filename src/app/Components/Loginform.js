import React from "react";
import "../styles/LoginForm.css";

const LoginForm = ({ onClose, toggleForm }) => {
    return (
        <div class="form-outer-container">
        <div class="form-container login-form-container">
        <i
            className="fa-regular form-closeIcon fa-circle-xmark"
            onClick={onClose}
          ></i>

            <form class="login-form">
                <h1 class="form-title">Login Account</h1>

                <div class="form-group">
                    <input type="email" class="form-input" placeholder="Email" required/>
                </div>

                <div class="form-group">
                    <input type="password" class="form-input" placeholder="Password" required/>
                </div>

                <div class="form-links">
                    <a onClick={toggleForm} href="#">Don't have an account?</a>
                </div>

                <button type="submit" class="login-button">Get Login</button>
            </form>
        </div>
    </div>
    )
}
export default LoginForm;
