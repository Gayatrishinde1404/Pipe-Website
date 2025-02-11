import React, { useState, useEffect } from "react";
import "../styles/Poster.css";
import HDPEImage from "../assets/HDPEimg.png";
import humeImage from "../assets/humeimg.png";
import schamberImage from "../assets/schemberimg.png";
import jackingpipeImage from "../assets/jackingpipeimg.png";
import roundpipeImage from "../assets/coverimage.png";

const Poster = () => {
  const products = [
    { id: 1, name: "HDPE Lined RCC Pipe", image: HDPEImage },
    { id: 2, name: "RCC Hume Pipe", image: humeImage },
    { id: 3, name: "Square RCC Chamber", image: schamberImage },
    { id: 4, name: "RCC Jacking Pipe", image: jackingpipeImage },
    { id: 5, name: "Round Chamber Cover", image: roundpipeImage },
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
