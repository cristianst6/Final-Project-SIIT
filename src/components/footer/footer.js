import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillUpCircle,
  AiFillDatabase,
  AiFillMail,
  AiFillTwitterSquare,
  AiTwotonePhone,
} from "react-icons/ai";
import "./footerstyles.css";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="topf">
          <div className="logo-footer">
            <AiFillDatabase className="icon" />
            <h2>More Informations</h2>
          </div>
          <Link
            activeClass="active"
            to="covertop"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <AiFillUpCircle className="icon" />
          </Link>
        </div>
        <div className="column-container">
          <div className="column">
            <h3>Navigation</h3>
            <p>
              <Link to="topnav" spy={true} smooth={true} duration={1000}>
                <L to="/">Home</L>
              </Link>
            </p>
            <p>
              <Link to="aboutmesp" spy={true} smooth={true} duration={1000}>
                <L to="/personalcvsp">Personal CV</L>
              </Link>
            </p>
            <p>
              <Link to="profmesp" spy={true} smooth={true} duration={1000}>
                <L to="/professionalcvsp">Professional CV</L>
              </Link>
            </p>
            <p>
              <Link to="weathersp" spy={true} smooth={true} duration={1000}>
                <L to="/weatherappapisp">Weather App</L>
              </Link>
            </p>
            <p>
              <Link to="contactsp" spy={true} smooth={true} duration={1000}>
                <L to="/contactussp">Contact Us</L>
              </Link>
            </p>
          </div>
          <div className="column">
            <h3>More Informations</h3>
            <div className="logo-footer">
              <AiTwotonePhone className="icon" />
              <p>+407 23 577 722</p>
            </div>
            <a
              href="https://developer.moneris.com/en/More/Compliance/Sample%20Privacy%20Policy"
              target="blank"
            >
              <p>Privacy Policy</p>
            </a>
            <p>Cookies</p>
            <a
              href="https://www.astartingpoint.com/static/tos.html?psafe_param=1&gclid=CjwKCAjwtuOlBhBREiwA7agf1lw88LtpnypWqVT0S70BPRPKo3hbCbh29KDQXs3nRvZ92NjfIp_VAxoClBIQAvD_BwE"
              target="blank"
            >
              <p>Terms and Conditions</p>
            </a>
          </div>
          <form>
            <h3>Contact me directly</h3>
            <input type="email" placeholder="Enter your emal" />
            <AiFillMail className="mail-icon" />
            <div className="social-icons">
              <a href="https://www.instagram.com/cristist610/" target="blank">
                <AiFillInstagram className="social-icon" />
              </a>
              <a href="https://www.facebook.com/cristi0610/" target="blank">
                <AiFillFacebook className="social-icon" />
              </a>
              <AiFillLinkedin className="social-icon" />
              <a href="https://github.com/cristianst6" target="blank">
                <AiFillGithub className="social-icon" />
              </a>
              <AiFillTwitterSquare className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
