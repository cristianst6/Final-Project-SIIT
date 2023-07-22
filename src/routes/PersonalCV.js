import React from "react";
import Navbar from "../components/navbar/navbar";
import AboutMe from "../components/aboutme/aboutme";
import Footer from "../components/footer/footer";

const PersonalCV = () => {
  return (
    <>
      <Navbar />
      <AboutMe style={{ marginTop: "100px" }} />
      <Footer />
    </>
  );
};

export default PersonalCV;
