import React from "react";
import "./Header.css"

const Header = ({ symbol }) => {
  return (
    <div className="Header">
      <h2>{symbol}</h2>
    </div>
  );
};

export default Header;