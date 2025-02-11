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
      name: "HDPE Lined RCC Pipes",
      category: "HDPE Lined RCC Pipes",
      image: HDPEImage,
      description:
        "lined RCC pipes are perfect for sewage, drainage, and industrial wastewater systems due to their corrosion resistance and smooth inner surface. These pipes are manufactured by casting high-strength reinforced concrete and lining it with HDPE, which prevents chemical damage and reduces friction for efficient flow. The use of premium-grade materials and strict quality control ensures long-lasting performance, making them ideal for municipal and industrial applications.",
    },
    {
      id: 2,
      name: "RCC Hume Pipes",
      category: "RCC Hume Pipes",
      image: humeImage,
      description:
        "RCC Hume pipes are widely used for water drainage, irrigation, road culverts, and underground sewage systems, offering exceptional strength and durability. Manufactured through centrifugal casting with reinforced concrete, these pipes are designed to withstand heavy loads and soil pressure. With rigorous quality checks for load-bearing capacity and water tightness, they provide a reliable and long-lasting solution for various infrastructure projects.",
    },
    {
      id: 3,
      name: "Square Chamber Covers",
      category: "Square Chamber Covers",
      image: schamberImage,
      description:
        "Square RCC chambers are essential for underground drainage, maintenance access, and utility enclosures, ensuring structural stability and easy inspection. Made from reinforced concrete with precision molds, these chambers offer high durability and load resistance. Designed with pre-formed openings for smooth pipeline connectivity, they undergo strict quality control to ensure longevity and performance in demanding conditions.",
    },
    {
      id: 4,
      name: "RCC Jacking Pipes",
      category: "RCC Jacking Pipes",
      image: jackingpipeImage,
      description:
        "RCC Jacking pipes are specially designed for trenchless installation, making them ideal for underground utility projects without surface disruption. Constructed using high-strength reinforced concrete, these pipes can withstand extreme jacking forces while maintaining alignment and leak-proof joints. Manufactured with precision casting techniques and tested for durability, they provide a long-lasting and efficient solution for urban infrastructure and tunneling applications.",
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
      <div className="filters">
        <select onChange={handleCategoryChange} value={category}>
          <option value="all">All</option>
          <option value="HDPE Lined RCC Pipes">HDPE Lined RCC Pipes</option>
          <option value="RCC Hume Pipes">RCC Hume Pipes</option>
          <option value="Square Chamber Covers">Square Chamber Covers</option>
          <option value="RCC Jacking Pipes">RCC Jacking Pipes</option>
          <option value="Round Chamber Cover">Round Chamber Cover</option> 
        </select>
      </div>

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
