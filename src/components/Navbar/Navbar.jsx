import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navbar">
      <nav className="app__nav">
        <div className="app__nav-logo">
          <span onClick={scrollTop}>{"</>Devmk"}</span>
        </div>
        <ul className="app__nav-links">
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li key={item}>
              <Link
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                duration={500}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="app__social-links">
          <a href="https://www.linkedin.com/in/mtendere-kulemeka">
            <FaLinkedinIn />
          </a>
          <a href="https://www.github.com/mkulemeka">
            <FaGithub />
          </a>
        </div>

        <div className="app__nav-menu">
          <div
            className={`nav-btn ${toggle ? "open" : ""}`}
            onClick={() => setToggle((prevState) => !prevState)}
          >
            <span className="nav-btn__burger"></span>
          </div>
          {toggle && (
            <motion.div
              className={`menu ${toggle && "open"}`}
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: "50%", opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ul>
                {["home", "about", "skills", "work", "contact"].map((item) => (
                  <li key={item}>
                    <Link
                      activeClass="active"
                      to={item}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => setToggle((prevState) => !prevState)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
