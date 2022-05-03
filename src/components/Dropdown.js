import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/skills">Skills</Link>
      </div>
    </div>
  );
}
