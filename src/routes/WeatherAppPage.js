import React from "react";
import Navbar from "../components/navbar/navbar";
import Weather from "../components/weather/weather";
import Footer from "../components/footer/footer";

const WeatherApiApp = () => {
  return (
    <>
      <Navbar />
      <Weather style={"100px"} />
      <Footer />
    </>
  );
};

export default WeatherApiApp;
