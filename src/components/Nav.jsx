import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="../public/images/brand_logo.png" alt="brand logo" />
        </div>

        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
};

export default Nav;
