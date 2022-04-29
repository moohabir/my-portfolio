import React from "react";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div className="header">
      {/* logo */}
      <div className="logo">
        <Link to="/"> MOAbdille </Link>
      </div>

      {/* large screens */}
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/login">Login</Link>
      </div>

      {/*small screens */}

      <div hidden>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
