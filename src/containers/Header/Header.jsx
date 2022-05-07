import "./Header.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import React from "react";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge app__flex">
            <span>👋</span>
            <div>
              <p className="p-text">Hi there, I am </p>
              <h2 className="head-text">Mtendere</h2>
            </div>
          </div>
          <div className="tag app__flex">
            <p className="p-text">
              <span className="icon">💻</span>Web Developer
            </p>
            <p className="p-text">
              <span className="icon">📷</span>Photographer
            </p>
            <p className="p-text">
              <span className="icon">🎮</span>Gamer
            </p>
          </div>
        </div>
        <div className="app__action">
          <Link activeClass="active" to="contact" spy smooth duration={500} tabIndex={0}>
            <button className="app__action-contact" type="button">
              Contact Me
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-image"
      >
        <img src={images.profile2} alt="Mtendere Kulemeka" />
      </motion.div>

      <motion.div
        className="app__header-circles"
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {[images.javascript, images.react, images.sass].map((circle, index) => (
          <div className="circle app__flex" key={`circle-${index}`}>
            <img src={circle} alt="Fluent Technologies" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
