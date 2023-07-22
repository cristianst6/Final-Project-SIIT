import React from "react";
import "./contactussp.css";

const ContactUs = ({ style }) => {
  return (
    <div name="contactsp" className="contact" style={{ marginTop: style }}>
      <div className="container">
        <div className="form-container">
          <form>
            <h1>
              <span>Contact</span> Us
            </h1>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" cols="190" placeholder="Enter your text" />
            </div>
            <button className="sendb">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
