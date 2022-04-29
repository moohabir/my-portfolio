import React from "react";
import { Link } from "react-router-dom";
export default function () {
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

      <div hidden>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/skills">Skills</Link>
      </div>
    </div>
  );
}
