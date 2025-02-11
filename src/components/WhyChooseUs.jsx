import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing the checkmark icon
import "../styles/WhyChooseUs.css";
import waytochooseimage from "../assets/waytochooseimg.jpg"; // Replace with your actual image path

const WhyChooseUs = () => {
  return (
    <section id="waytochoose" className="why-choose-us">
      <div className="why-choose-us-container">
        <div className="why-choose-us-content">
          <h2>Why Choose Us?</h2>
          <div className="reasons">
            <div className="reason" data-aos="fade-up" data-aos-duration="1000">
              <h3><FaCheckCircle className="check-icon" /> High Quality Products</h3>
              <p>We offer top-quality pipes and accessories, built to last and meet all industry standards.</p>
            </div>
            <div className="reason" data-aos="fade-up" data-aos-duration="1200">
              <h3><FaCheckCircle className="check-icon" /> Reliable Delivery</h3>
              <p>Our products are delivered on time, ensuring your projects run smoothly without delays.</p>
            </div>
            <div className="reason" data-aos="fade-up" data-aos-duration="1400">
              <h3><FaCheckCircle className="check-icon" /> Customer Satisfaction</h3>
              <p>We focus on customer satisfaction by providing exceptional products that meet the highest standards of quality.</p>
            </div>
            <div className="reason" data-aos="fade-up" data-aos-duration="1600">
              <h3><FaCheckCircle className="check-icon" /> Competitive Pricing</h3>
              <p>We offer the best prices in the market without compromising on product quality.</p>
            </div>
          </div>
        </div>

        <div className="why-choose-us-image" data-aos="fade-left" data-aos-duration="1000">
          <img src={waytochooseimage} alt="Why Choose Us" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
