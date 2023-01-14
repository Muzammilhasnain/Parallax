/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img className="logo-img-width" ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img className="logo-img-width" ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img className="logo-img-width" ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link href={`/home`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/about-us`}>
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/Products-&-Services`}>
                <a className="nav-link">Products & Services</a>
              </Link>
            </li>
            <li clasname="nav-item" >
              <Link href={"/ventures"}>
                <a className="nav-link" >Ventures</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href={`/Gallery`}>
                <a className="nav-link">Gallery</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/Blogs`}>
                <a className="nav-link">Blogs</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/News`}>
                <a className="nav-link">News</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/Collaborate-with-us`}>
                <a className="nav-link">Collaborate with us</a>
              </Link>
            </li>
          
            
            <li className="nav-item">
              <Link href={`contact-us`}>
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
