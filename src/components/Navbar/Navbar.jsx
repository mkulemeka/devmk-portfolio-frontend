import "./Navbar.scss";

import { MobileNav } from "../../components";
import { AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function scrollTop() {
    scroll.scrollToTop();
  }

  function navigationState() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div className="navbar">
      <nav className="app__nav">
        <div className="app__nav-logo">
          <span
            onClick={scrollTop}
            onKeyDown={scrollTop}
            tabIndex={0}
            role="button"
          >
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
          <a
            href="https://www.linkedin.com/in/mtendere-kulemeka"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://www.github.com/mkulemeka" aria-label="Github">
            <FaGithub />
          </a>
        </div>

        <div className="app__nav-menu">
          <div
            className={`nav-btn ${toggle ? "open" : ""}`}
            onClick={navigationState}
            role="button"
            aria-label={toggle ? "Close Navigation" : "Open Navigation"}
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>

          <AnimatePresence>
            {toggle && <MobileNav navigationState={navigationState} />}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
