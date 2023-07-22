import React, { useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import "./navbarstyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name="topnav" className="navbar">
      <div className="containernavbar">
        <div className="logo">
          <AiFillDatabase className="icon" />
          <h1>Navigation</h1>
        </div>

        <ul className={nav ? "navmenu active" : "navmenu"}>
          <li>
            <Link to="/mainsitepage">Home</Link>
          </li>
          <li>
            <Link to="/personalcvsp">Personal CV</Link>
          </li>
          <li>
            <Link to="/professionalcvsp">Professional CV</Link>
          </li>
          <li>
            <Link to="/weatherappapisp">Weather App</Link>
          </li>
          <li>
            <Link to="/contactussp">Contact Us</Link>
          </li>
          {/* <button>Sign in</button> */}
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <AiFillCaretLeft className="icon" />
          ) : (
            <AiFillCloseCircle className="icon" />
          )}
          <AiFillCaretLeft className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
