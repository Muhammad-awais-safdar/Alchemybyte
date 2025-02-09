import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  return(
<header className="main-header">
  <div className="header-sticky">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo Start */}
        <a className="navbar-brand" href="index.html">
          <img src="images/logo.png" alt="Logo" />
        </a>
        {/* Logo End */}
        {/* Main Menu Start */}
        <div className="collapse navbar-collapse main-menu">
          <div className="nav-menu-wrapper">
            <ul className="navbar-nav mr-auto" id="menu">
              <li className="nav-item "><a className="nav-link" href="index.html">Home</a>
               
              </li>                                
              <li className="nav-item"><a className="nav-link" href="about.html">About Us</a>
              </li><li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
              <li className="nav-item "><a className="nav-link" href="#">Pages</a>
               
              </li>
              <li className="nav-item highlighted-menu"><a className="nav-link" href="contact.html">Contact Us</a></li>                           
            </ul>
          </div>
          {/* Header Btn Start */}
          <div className="header-btn">
            <a href="contact.html" className="btn-default">Contact Us</a>
          </div>
          {/* Header Btn End */}
        </div>
        {/* Main Menu End */}
        <div className="navbar-toggle" />
      </div>
    </nav>
    <div className="responsive-menu" />
  </div>
</header>

  )
};
