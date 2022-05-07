import './MobileNav.scss';
import { motion } from "framer-motion";

import React from "react";
import { Link} from "react-scroll";

const MobileNav = ({setToggle}) => {
  return (
    <>
      <motion.div
        className="menu"
        initial={{ width: "0%", opacity: 0 }}
        animate={{ width: "50%", opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ width: "0%", opacity: 0 }}
      >
        <ul>
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li key={item}>
              <Link
                activeClass="active"
                to={item}
                spy
                smooth
                duration={500}
                onClick={() => setToggle((prevState) => !prevState)}
                tabIndex={0}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default MobileNav;
