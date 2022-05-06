import "./About.scss";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const About = () => {
  const [abouts, SetAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      SetAbouts(data);
    });
  }, []);

  return (
    <div className="app__about" id="about">
      <motion.h1
        whileInView={{ y: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="head-text"
        style={{ marginTop: 40 }}
      >
        A Little Bit <span className="accent">About</span> Me
      </motion.h1>
      <motion.div
        whileInView={{ y: [10, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="app__bio"
      >
        <p className="p-text">
          My full name is Mtendere Kulemeka Whayo. I am currently a junior
          student at
          <span>
            <a href="https://www.temple.edu">Temple University</a>
          </span>
          . I am pursuing a persuing a B.Sc in Information Science
          <span className="accent"> &</span> Technology. My concentration is Web
          development and Cyber Security.
          <br />
        </p>
      </motion.div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            className="app__about-card"
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h3 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
