import "./Work.scss";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsCodeSlash, BsEye } from "react-icons/bs";

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);
  return (
    <div className="app__work" id="work">
      <motion.h1
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="head-text"
        style={{ marginTop: 50 }}
      >
        My <span>Projects</span> Section
      </motion.h1>
      <div className="app__work-container" style={{ marginTop: 30 }}>
        {works.map((work, index) => (
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="work"
            key={work.title + index}
          >
            <div className="work__card-img app__flex">
              <img
                className="app__flex"
                src={urlFor(work.imgUrl)}
                alt={work.title}
              />
              <div className="work__card-icons">
                <motion.div
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.05 }}
                >
                  <a href={work.projectLink}>
                    <div className="app__flex">
                      <BsEye />
                    </div>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.05 }}
                >
                  <a href={work.codeLink}>
                    <div className="app__flex">
                      <BsCodeSlash />
                    </div>
                  </a>
                </motion.div>
              </div>
            </div>
            <h3 style={{ marginTop: 10 }}>{work.title}</h3>
            <p style={{ marginTop: 10 }}>{work.description}</p>
            <div className="work__card-tags" style={{ marginTop: 10 }}>
              {work.tags.map((tag, i) => (
                <p key={i} className="work__tag">
                  {tag}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
