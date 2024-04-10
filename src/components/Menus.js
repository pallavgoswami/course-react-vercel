import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginRight: "20px",
  };

  return (
    <div className="text-end" style={{ position: "relative", zIndex: 1 }}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/add-course" style={linkStyle}>
        Add Courses
      </Link>
      <Link to="/view-courses" style={linkStyle}>
        View Courses
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </div>
  );
};

export default Menus;
