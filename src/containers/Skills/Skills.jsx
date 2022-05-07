import "./Skills.scss";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, SetSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      SetSkills(data);
    });
  }, []);
  
  return (
    <div className="app__skills" id="skills">
      <div className="app__container">
        <motion.h1
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="head-text"
        >
          Skills
        </motion.h1>
        <div className="app__skills-list" style={{ marginTop: 30 }}>
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              key={skill.name + index}
              className="app__skills-item app__flex"
            >
              <div className="app__flex">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text" style={{ marginTop: 10 }}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
