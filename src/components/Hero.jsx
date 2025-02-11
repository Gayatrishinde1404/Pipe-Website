import React from "react";
import { motion } from "framer-motion";
import heroImage from '../assets/heroimages.png'; // Adjust the path as needed
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }} // Applying the imported image dynamically
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Bhakti Shakti RCC Pipes
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          We Manufacture and Supply Quality RCC pipes for all your construction needs.
        </motion.p>
        
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Manufacturer and Supplier of :
          <li>- HDPE Lined RCC Pipes</li>
          <li>- RCC Hume Pipes</li>
          <li>- Chamber Covers</li>
          <li>- RCC Jacking Pipes</li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Hero;
