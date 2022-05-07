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
  const number = process.env.REACT_APP_PHONE_NUMBER;
  return (
    <div className="app__footer" style={{ marginTop: 50 }}>
      <p className="footer-copyright"> &copy; 2022 Devmk</p>
      <div className="footer-icons">
        <a href="https://www.facebook.com/kahle-kulemeka" aria-label="Facebook">
          <FaFacebook aria-label="Facebook icon" />
        </a>
        <a href="https://www.instagram.com/_kahlr" aria-label="Instagram">
          <FaInstagram aria-label="Instagram icon" />
        </a>
        <a href={`https://wa.me/${number}`} aria-label="WhatsApp">
          <FaWhatsapp aria-label="WhatsApp icon" />
        </a>
        <a href="https://www.twitter.com/kahle01" aria-label="Twitter">
          <FaTwitter aria-label="Twitter icon" />
        </a>
        <a href="https://www.github.com/mkulemeka" aria-label="Github">
          <FaGithub aria-label="Github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/mtendere-kulemeka"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn aria-label="LinkedIn icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
