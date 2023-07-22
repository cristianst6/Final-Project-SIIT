import React from "react";
import "./coverstyle.css";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <div name="covertop" className="cover">
      <div className="container">
        <div className="content">
          <h1>React Introduction</h1>
          <h1 className="blue">Stoian Cristian</h1>
          <h1>CV and First Project</h1>
          <div>
            <Link to="/contactussp">
              <button>Contact for more details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
