import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="main-header">
        <div className="container">
          <div className="row">
            <p>
              <Link to="/">ZOROBLOG</Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
