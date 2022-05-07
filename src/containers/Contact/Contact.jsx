import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Footer } from "../../containers/index";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert("Messege sent");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <motion.div
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__contact"
      id="contact"
    >
      <h1 className="head-text" style={{ marginTop: '2rem'}}>
        Get <span>in</span> Touch
      </h1>
      <form className="app__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </motion.div>
  );
};

export default Contact;
