import React from "react";
import CartConnected from "./CartConnected";

function Header({ title }) {
  return (
    <div className="header-container">
      <div className="header-title">{title}</div>
      <CartConnected />
    </div>
  );
}

export default Header;
