import React from "react";
import "../style.css";
import logoUpOneWh from "../Media Files/task1 Images/logoUpOneWh.png";
import logoDownOneWh from "../Media Files/task1 Images/logoDownOneWh.png";

const NavigationBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logoUpOneWh} alt="company logo" className="logoUpOne" />
        <img src={logoDownOneWh} alt="company logo" className="logoDownOne" />
      </div>

      <div className="pages">
        <ul>
          <li className="navMarginRight">About</li>
          <li className="navMarginRight">Case Studies</li>
          <li className="navMarginRight">Services</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="search-container">
        <form action="">
          <button className="maginfy-container">
            <i className="fa fa-search"></i>
          </button>

          <input
            className="input-container"
            type="text"
            placeholder="Search Here.."
            name="search"
          />

          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default NavigationBar;
