import React from "react";
import "../components/css/navbar.css";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Courses
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">All Courses</Link>
          </li>
          <li>
            <Link to="/mycourses">Active Courses</Link>
          </li>
          <li>
            <Link to="/mycourses/completed">Completed Courses</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
