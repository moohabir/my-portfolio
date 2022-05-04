import React, { useState } from "react";
import { Link } from "react-router-dom";
import menubar from "../assets/menubar.jpg";
import cross from "../assets/cross.jpg";
export default function () {
  const [open, setOpen] = useState(false);

  function togle() {
    setOpen(!open);
  }
  return (
    <div className="header">
      {/* logo */}
      <div className="logo">
        <Link to="/" className="logo-link">
          {" "}
          MOAbdille{" "}
        </Link>
      </div>

      {/* large screens */}
      <div className="nav-items">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/projects" className="link">
          Projects
        </Link>
        <Link to="/skills" className="link">
          Skills
        </Link>
        <Link to="/contacts" className="link">
          Contacts
        </Link>
      </div>

      {/*small screens */}

      <div className="list-mobile">
        <Link to="/" className="mobile-link">
          Home
        </Link>
        <Link to="/about" className="mobile-link">
          About
        </Link>
        <Link to="/projects" className="mobile-link">
          Projects
        </Link>
        <Link to="/contacts" className="mobile-link">
          Contacts
        </Link>
        <Link to="/skills" className="mobile-link">
          Skills
        </Link>
      </div>
      <div className="main-menubar" onClick={togle}>
        {open ? (
          <img src={cross} className="menubar" alt="" />
        ) : (
          <img src={menubar} alt="" className="menubar" />
        )}
      </div>
    </div>
  );
}
