import React from "react";
import { Link } from "react-router-dom";
//import heroImage from "../assets/heroImage.jpg";

export default function About() {
  return (
    <div className="about">
      {/*image will be left side on mobile column above and center*/}
      {/*<div className="image">
        <img src={heroImage} alt="" className="about-image" />
  </div> */}

      {/*below will be right side*/}
      <div className="hero-right">
        <h1 className="hero-title">
          I am Front-end <br /> Web Developer
        </h1>
        <h1 className="hero-title">And Blockchain Developer</h1>
        <Link to="/contacts">
          <button className="about-btn"> Hire Me </button>
        </Link>

        <Link to="/contacts">
          <button className="about-btn"> Contact Me </button>
        </Link>
      </div>
    </div>
  );
}
