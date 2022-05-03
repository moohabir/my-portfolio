import React, { useState } from "react";
import { Link } from "react-router-dom";
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

      <div hidden>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/skills">Skills</Link>
      </div>
      <div className="menubar">
        <Link to="svg" className="menubar" /*onClick={togle*/>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            className="menubar"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
              className="menubar"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
