import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 Student<span>Hub</span></h2>

      <div className="nav-links">
        <Link to="/">Add Student</Link>
        <Link to="/students">Show Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;
