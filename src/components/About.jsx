import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="about-content"
      >
        <h2>About Us</h2>
        <p>
          At <strong>Bhakti Shakti RCC Pipes</strong>, we pride ourselves on being a leading manufacturer of top-tier RCC (Reinforced Cement Concrete) pipes. For years, we have been at the forefront of delivering high-quality piping solutions tailored for infrastructure projects of all scales. Whether it's for large-scale construction, urban development, or irrigation systems, we understand the critical importance of durability and reliability in the piping system that forms the backbone of these projects.
        </p>
        <p>
          Our commitment to excellence drives us to provide robust, high-performance RCC pipes that exceed industry standards. Each of our products is crafted with precision, ensuring that they stand the test of time, even under the most challenging conditions. By utilizing the latest manufacturing techniques and ensuring the highest quality of raw materials, we guarantee that our pipes offer strength, resilience, and longevity.
        </p>

        <div className="social-icons">
          <a href="https://www.facebook.com/bhaktishakti.pipes" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/bhaktishakti_precast/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="tel:7773938682" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
