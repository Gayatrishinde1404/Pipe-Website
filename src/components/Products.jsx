import React, { useState } from "react";
import "../styles/Products.css";
import HDPEImage from "../assets/HDPEimg.png";
import humeImage from "../assets/humeimg.png";
import schamberImage from "../assets/schemberimg.png";
import jackingpipeImage from "../assets/jackingpipeimg.png";
import roundpipeImage from "../assets/coverimage.png";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Products = () => {
  const [category, setCategory] = useState("all"); // Default category is "all"

  const products = [
   
    {
      id: 1,
      name: "RCC Hume Pipes",
      category: "RCC Hume Pipes",
      image: humeImage,
      description:
        "RCC Hume pipes are strong, durable, and ideal for drainage, irrigation, culverts, and sewage systems. Made with reinforced concrete, they withstand heavy loads and soil pressure, ensuring reliability for infrastructure projects. Rigorously tested for strength and water tightness, they offer long-lasting performance.",
    },

     {
      id: 2,
      name: "HDPE Lined RCC Pipes",
      category: "HDPE Lined RCC Pipes",
      image: HDPEImage,
      description:
        "Lined RCC pipes are ideal for sewage, drainage, and industrial wastewater systems due to their corrosion resistance and smooth HDPE-lined surface, ensuring efficient flow and durability. Made from high-strength reinforced concrete, they offer long-lasting performance for municipal and industrial use.",
    },
    {
      id: 3,
      name: "Square RCC Chamber",
      category: "Square RCC Chamber",
      image: schamberImage,
      description:
        "Square RCC chambers provide durable, load-resistant solutions for drainage, maintenance access, and utility enclosures. With pre-formed openings for easy pipeline connectivity, they ensure stability and long-lasting performance. Made from reinforced concrete, they withstand harsh conditions with strict quality control.",
    },
    {
      id: 4,
      name: "RCC Jacking Pipes",
      category: "RCC Jacking Pipes",
      image: jackingpipeImage,
      description:
        "RCC Jacking pipes enable trenchless installation for underground utilities without surface disruption. Made from high-strength concrete, they withstand extreme jacking forces, ensuring durability and leak-proof joints for urban infrastructure. Precision-manufactured and tested for long-lasting performance.",
    },
        {
      id: 5,
      name: "Round Chamber Cover",
      category: "Round Chamber Cover",
      image: roundpipeImage,
      description:
        "Round chamber covers provide a strong and durable solution for securing underground drainage and utility access points. Made from reinforced concrete, they withstand heavy loads and harsh conditions. Precision casting ensures a perfect fit, while strict quality checks guarantee longevity and reliability.",
    },
  ];

  // Filtering products based on category
  const filteredProducts = products.filter(
    (product) => category === "all" || product.category === category
  );

  // Handler for changing the category
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length
    );
  };

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>

      <div className="product-carousel">
        <motion.div
          className="product-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {filteredProducts.length > 0 ? (
            <div className="product-card">
              <div className="product-image">
                <img
                  src={filteredProducts[currentIndex]?.image}
                  alt={filteredProducts[currentIndex]?.name}
                />
              </div>
              <div className="product-info">
                <h3>{filteredProducts[currentIndex]?.name}</h3>
                <p className="category">
                  {filteredProducts[currentIndex]?.category}
                </p>
                <p className="description">
                  {filteredProducts[currentIndex]?.description}
                </p>
              </div>
            </div>
          ) : (
            <p>No products found for this category.</p>
          )}
        </motion.div>
        {filteredProducts.length > 0 && (
          <div className="carousel-controls">
            <FaArrowLeft onClick={handlePrev} />
            <FaArrowRight onClick={handleNext} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
