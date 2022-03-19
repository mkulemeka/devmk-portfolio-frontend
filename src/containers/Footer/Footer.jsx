import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app__footer">
      <p className="footer-copyright"> &copy; 2022 Devmk</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/kahle-kulemeka">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/_kahlr">
          <FaInstagram />
        </a>
        <a href="">
          <FaWhatsapp />
        </a>
        <a href="https://www.twitter.com/kahle01">
          <FaTwitter />
        </a>
        <a href="https://www.github.com/mkulemeka">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mtendere-kulemeka">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
