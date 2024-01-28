import React from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="./Images/logo.jpg" alt="logo"/>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
