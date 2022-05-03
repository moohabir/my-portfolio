import React from "react";
import heroImage from "../assets/heroImage.png";
export default function Hero() {
  return (
    <div className="hero">
      {/*image will be left side on mobile column above and center*/}
      <div className="hero-left">
        <img src={heroImage} alt="" className="hero-image" />
      </div>

      {/*below will be right side*/}
      <div className="hero-right">
        <h1 className="hero-title">Hero Section Title</h1>
        <p className="hero-p"> Hero Paragraph </p>
      </div>
    </div>
  );
}
