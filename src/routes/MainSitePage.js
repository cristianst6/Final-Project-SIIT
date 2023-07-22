import React from "react";
import Navbar from "../components/navbar/navbar";
import Cover from "../components/cover/cover";
import AboutMe from "../components/aboutme/aboutme";
import Professional from "../components/professional/professional";
import Weather from "../components/weather/weather";
import Footer from "../components/footer/footer";

const MainSitePage = () => {
  return (
    <>
      <Navbar />
      <Cover />
      <AboutMe />
      <Professional />
      <Weather />
      <Footer />
    </>
  );
};

export default MainSitePage;
