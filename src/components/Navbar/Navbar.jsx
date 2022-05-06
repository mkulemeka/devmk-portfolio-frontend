import "./Navbar.scss";

import { MobileNav } from "../../components";
import { AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navbar">
      <nav className="app__nav">
        <div className="app__nav-logo">
          <span onClick={scrollTop} role="button">
            {"</>Devmk"}
          </span>
        </div>
        <ul className="app__nav-links">
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li key={item}>
              <Link activeClass="active" to={item} spy smooth duration={500}>
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
            role="button"
          >
            <span />
            <span />
            <span />
          </div>

          <AnimatePresence>
            {toggle && <MobileNav setToggle={setToggle} />}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
