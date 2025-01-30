import React, { useState, useEffect } from "react";
import "../styles/Poster.css";
import rccImage from "../assets/Rccpipeimage.png";
import spunImage from "../assets/spunimg.png";
import chamberImage from "../assets/chemberimage.png";
import coverImage from "../assets/coverimage.png";

const Poster = () => {
  const products = [
    { id: 1, name: "RCC Pipes", image: rccImage },
    { id: 2, name: "Spun Pipes", image: spunImage },
    { id: 3, name: "Chamber Pipes", image: chamberImage },
    { id: 4, name: "Chamber Covers", image: coverImage },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic image rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [products.length]);

  return (
    <section className="poster">
      <h2>What We Offer</h2>
      <div className="poster-carousel">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`poster-image ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${product.image})`, // Set the background image
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Poster;
