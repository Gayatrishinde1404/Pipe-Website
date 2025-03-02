import React from "react";
import "../styles/Extrapipe.css"; // Importing CSS
import pipesize1 from "../assets/gallery/pipesize1img.png"; // Importing Image 1
import pipesize2 from "../assets/gallery/pipesize2img.png"; // Importing Image 2

const Extrapipe = () => {
  return (
    <div className="extrapipe-container">
      <h1>🏗️ Hume Pipe Specifications</h1>
      <p className="intro">
        We provide <strong>high-quality RCC Hume Pipes</strong> in multiple sizes and grades (NP2 & NP3) to meet your construction and drainage needs.
      </p>

      {/* Pipe Specifications Table */}
      <h2>📏 Available Sizes & Grades</h2>
      <table className="pipe-table">
        <thead>
          <tr>
            <th>Pipe Size (Inches)</th>
            <th>Diameter (mm)</th>
            <th>Grade Options</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6"</td>
            <td>150 mm</td>
            <td>NP2</td>
            <td>Drainage, Small Culverts</td>
          </tr>
          <tr>
            <td>8"</td>
            <td>200 mm</td>
            <td>NP2</td>
            <td>Sewerage, Irrigation</td>
          </tr>
          <tr>
            <td>10"</td>
            <td>250 mm</td>
            <td>NP2, NP3</td>
            <td>Road Culverts, Stormwater</td>
          </tr>
          <tr>
            <td>12"</td>
            <td>300 mm</td>
            <td>NP2, NP3</td>
            <td>High-Load Drainage, Infrastructure</td>
          </tr>
        </tbody>
      </table>

      {/* NP2 vs NP3 Comparison Section */}
      <h2>🔹 NP2 vs. NP3 – What's the Difference?</h2>
      <div className="comparison">
        <div className="np2">
          <h3>🏗️ NP2 Pipes (Normal Load Capacity)</h3>
          <p>✔ Ideal for <strong>low to medium traffic</strong> areas.</p>
          <p>✔ Used in <strong>drainage, agriculture, and small culverts</strong>.</p>
          <p>✔ <strong>Cost-effective and lightweight.</strong></p>
        </div>
        <div className="np3">
          <h3>🏗️ NP3 Pipes (Heavy Load Capacity)</h3>
          <p>✔ Designed for <strong>high-load applications</strong>.</p>
          <p>✔ Suitable for <strong>highways, bridges, and urban drainage</strong>.</p>
          <p>✔ <strong>Reinforced for extra durability.</strong></p>
        </div>
      </div>

      {/* Image Gallery */}
      <h2>Hume-Pipes Size Gallery</h2>
      <div className="gallery">
        <img src={pipesize1} alt="Hume Pipe Size 1" className="gallery-img" />
        <img src={pipesize2} alt="Hume Pipe Size 2" className="gallery-img" />
      </div>

      
    </div>
  );
};

export default Extrapipe;
