import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </nav>
      </header>
    </div>
  );
};

export default Header;
