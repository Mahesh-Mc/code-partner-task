import React from "react";
import "../style.css";
import logoUpOneWh from "../Media Files/task1 Images/logoUpOneWh.png";
import logoDownOneWh from "../Media Files/task1 Images/logoDownOneWh.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="col-1">
        <img src={logoUpOneWh} alt="company logo" className="logoUpOne" />
        <img src={logoDownOneWh} alt="company logo" className="logoDownOne" />

        <h3>CODE PARTNER</h3>
      </div>
      <div className="col-2">
        <p className="foot-heading">Links</p>
        <p>Home</p>
        <p>services</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Press release</p>
        <p>Blog</p>
      </div>
      <div className="col-3">
        <p className="foot-heading">Terms of use</p>
        <p>Terms & conditions</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
      </div>
      <div className="col-4">
        <p className="foot-heading">News Letter</p>
        <p className="margin-para">
          Join over <a href="#">68,000</a> people getting our emails
        </p>
        <p className="input-para">
          <input placeholder="Enter yout email" />
          <button className="signUpButton">Sign Up</button> <br />
          <small>We only send interesting and relevant emails.</small>
        </p>
      </div>
      <table>
        <tr>
          <td>
            <strong>Privacy & Terms.</strong>
          </td>
          <td>
            <strong>Contact Us</strong>
          </td>
          <td>
            <small>Copyright @2021 Code Partner Solutions Pvt. Ltd.</small>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Footer;
