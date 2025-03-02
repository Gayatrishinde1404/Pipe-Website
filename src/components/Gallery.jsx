import React, { useState } from "react";
import "../styles/gallery.css"; 
import product1 from "../assets/gallery/product1.png";
import product2 from "../assets/gallery/product2.png";
import product3 from "../assets/gallery/product3.png";
import product4 from "../assets/gallery/product4.png";
import product5 from "../assets/gallery/product5.png";
import ved1 from "../assets/gallery/ved1.mp4";
import ved2 from "../assets/gallery/ved2.mp4";
import ved3 from "../assets/gallery/ved3.mp4";
import ved4 from "../assets/gallery/ved4.mp4";
import ved5 from "../assets/gallery/ved5.mp4";
import ved6 from "../assets/gallery/ved6.mp4";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [enlargedVideo, setEnlargedVideo] = useState(null);

  return (
    <div id="gallery" className="gallery">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-container">
        {/* Initially Displayed Images */}
        <img src={product1} alt="Product 1" className="gallery-image" />
        <img src={product2} alt="Product 2" className="gallery-image" />
        
        {/* Show all images & videos when "See More" is clicked */}
        {showAll && (
          <>
            <img src={product3} alt="Product 3" className="gallery-image" />
            <img src={product4} alt="Product 4" className="gallery-image" />
            <img src={product5} alt="Product 5" className="gallery-image" />

            {/* Videos */}
            <video src={ved1} className="gallery-video" controls onClick={() => setEnlargedVideo(ved1)} />
            <video src={ved2} className="gallery-video" controls onClick={() => setEnlargedVideo(ved2)} />
            <video src={ved3} className="gallery-video" controls onClick={() => setEnlargedVideo(ved3)} />
            <video src={ved4} className="gallery-video" controls onClick={() => setEnlargedVideo(ved4)} />
            <video src={ved5} className="gallery-video" controls onClick={() => setEnlargedVideo(ved5)} />
            <video src={ved6} className="gallery-video" controls onClick={() => setEnlargedVideo(ved6)} />
          </>
        )}
      </div>

      {/* See More / See Less Button */}
      <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "See Less" : "See More"}
      </button>

      {/* Enlarged Video Overlay */}
      {enlargedVideo && (
        <div className="video-overlay" onClick={() => setEnlargedVideo(null)}>
          <video src={enlargedVideo} controls autoPlay />
        </div>
      )}
    </div>
  );
};

export default Gallery;
