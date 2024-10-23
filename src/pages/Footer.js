import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Logo</div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Mobile App</h3>
            <p>Download our app for iOS and Android.</p>
          </div>

          <div className="footer-column">
            <h3>Community</h3>
            <p>Join the largest photo enthusiast community.</p>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <p>About us, careers, and press information.</p>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p className="footer-left">We love our users!</p>
        <div className="footer-right">
          Follow us:
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
