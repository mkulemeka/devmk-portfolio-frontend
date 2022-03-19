import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { Footer } from "../../containers/index";

const Contact = () => {
  const [contact, SetContact] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const query = '*[_type == "contact"]';
    client.fetch(query).then((data) => {
      SetContact(data);
    });
  }, []);

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
        (result) => {
          console.log(result.text);
          alert("Messege sent");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="app__contact" id="contact">
      <h1 className='head-text'>Get <span>in</span> Touch</h1>
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
          <button className="form-button">Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
