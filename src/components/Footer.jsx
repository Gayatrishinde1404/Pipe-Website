import React from 'react';
import pipeImage from '../assets/pipeimage.png'; // Adjust the path as needed
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-container">
        {/* First column */}
        <div className="footer-column">
          <img src={pipeImage} alt="Company Logo" className="footer-logo" />
          <p className="footer-description">
            We are a leading manufacturer of RCC pipes, providing quality solutions for all your construction needs.
          </p>
        </div>

        {/* Second column: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#gallery">Our Gallery</a></li>
            <li><a href="#waytochoose">Why To Choose Us</a></li>
          </ul>
        </div>

        {/* Third column: Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Address: 
            <a 
              href="https://maps.app.goo.gl/RSmu6rYceMDWSF3u8?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-address"
            >
               Peth Naigaon, Taluka Haveli, Dist-Pune, 412110
            </a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />
            Email: <a href="mailto:aniketchaudhari8682@gmail.com">aniketchaudhari8682@gmail.com</a>
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" />
            Phone: <a href="tel:+917773938682">7773938682</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
