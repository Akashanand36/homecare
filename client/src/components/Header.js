import React from "react";

function Header() {
  return (
    <header>
      <div className="header-container">
     <div className="logo">
  <img src="/images/logo.png" alt="logo" />
  <span className="brand-name">Prema's HomeCare</span>
</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}


export default Header;
