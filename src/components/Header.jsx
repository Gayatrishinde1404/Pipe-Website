import React, { useState } from "react";
import "../styles/Header.css";
import { motion } from "framer-motion";
import pipeLogo from "../assets/pipeimage.png"; // Import your image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo-container">
        <img src={pipeLogo} alt="Pipe Logo" className="pipe-logo" /> {/* Image */}
      <a href="#home" className="logo-text">Bhakti Shakti Pipes</a> {/* Text */}
      </div>
      <nav className="nav">
        <ul className={isMenuOpen ? "active" : ""}>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#home">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#about">About</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#products">Products</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#gallery">Gallery</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#footer">Contact</a>
          </motion.li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
