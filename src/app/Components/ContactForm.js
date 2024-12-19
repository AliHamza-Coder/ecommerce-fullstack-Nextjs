"use client";
import React, { useState } from "react";
import "../styles/ContactForm.css"; // Assuming you have a custom CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send to an API)
    alert("Message sent!");
  };

  return (
    <section className="contactUs">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            pattern="[^ @]*@[^ @]*"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
