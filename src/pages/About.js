import React from "react";
import heroImage from "../assets/heroImage.png";
export default function About() {
  return (
    <div className="about">
      {/*image will be left side on mobile column above and center*/}
      <div className="image">
        <img src={heroImage} alt="" className="about-image" />
      </div>

      {/*below will be right side*/}
      <div className="hero-right">
        <h1 className="hero-title">
          I am Front-end <br /> Web Developer
        </h1>
        <h1 className="hero-title">And Blockchain Developer</h1>
        <button className="about-btn"> Hire Me </button>
        <button className="about-btn"> Contact Me </button>
      </div>
    </div>
  );
}
