import React, { useState } from "react";
import "../styles/Products.css";
import rccImage from "../assets/Rccpipeimage.png";
import spunImage from "../assets/spunimg.png";
import chamberImage from "../assets/chemberimage.png";
import coverImage from "../assets/coverimage.png";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Products = () => {
  const [category, setCategory] = useState("all"); // Default category is "all"

  const products = [
    {
      id: 1,
      name: "RCC",
      category: "RCC Pipes",
      image: rccImage,
      description:
        "RCC pipes are used for a variety of applications in construction and infrastructure projects. They are known for their durability, corrosion resistance, and cost-effectiveness. Our RCC pipes go through a stringent quality control process to ensure reliability and longevity.",
    },
    {
      id: 2,
      name: "Spun",
      category: "Spun Pipes",
      image: spunImage,
      description:
        "Spun pipes are often used in industrial settings due to their strength and reliability. They are made from high-quality materials and undergo a special spinning process that enhances their performance. They are ideal for handling high pressure and harsh conditions.",
    },
    {
      id: 3,
      name: "Chamber",
      category: "Chamber Pipes",
      image: chamberImage,
      description:
        "Chamber pipes are essential for various underground applications, such as sewage and stormwater systems. They are designed to handle the heavy loads of underground infrastructure while ensuring optimal water flow and durability.",
    },
    {
      id: 4,
      name: "Chamber Covers",
      category: "Chamber Covers",
      image: coverImage,
      description:
        "Our chamber covers are built with precision and high-quality materials, ensuring that they can withstand heavy traffic loads and environmental pressures. They are designed to provide safe and secure access to underground utilities.",
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
          <option value="RCC Pipes">RCC Pipes</option>
          <option value="Spun Pipes">Spun Pipes</option>
          <option value="Chamber Pipes">Chamber Pipes</option>
          <option value="Chamber Covers">Chamber Covers</option>
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
