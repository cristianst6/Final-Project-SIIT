import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./weatherstyle.css";

const weatherTypes = [
  "atmosphere",
  "clear",
  "clouds",
  "drizzle",
  "rain",
  "snow",
  "thunderstorm",
];

const wallpapers = [
  "/imgweather/atmosphere.jpeg",
  "/imgweather/clear.jpeg",
  "/imgweather/clouds.jpeg",
  "/imgweather/drizzle.jpeg",
  "/imgweather/rain.jpeg",
  "/imgweather/snow.jpeg",
  "/imgweather/thunderstorm.jpeg",
];

const Wrapper = styled.div`
  width: 100%;
  height: 730px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  &:before {
    content: "";
    background: url(${(props) => props.background}) no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Weather = ({ style }) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [display, setDisplay] = useState("none");
  const [background, setBackground] = useState("/imgweather/1540016.jpg");
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=f36d69c57df3c2958ebef5603b748f46`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setDisplay("grid");
        setBackground(
          `/imgweather/${response.data.weather[0].main.toLowerCase()}.jpeg`,
        );
      });
      setLocation("");
    }
  };

  return (
    <Wrapper
      name="weathersp"
      background={background}
      style={{ marginTop: style }}
    >
      <h1>
        Weather <span>App</span>
      </h1>
      <div className="searchbar">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder="Search a city"
        ></input>
      </div>
      <div className="containerweather">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
            <p></p>
          </div>
        </div>
        <div className="bottom" style={{ display }}>
          <div className="feels_temp">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} km/H</p> : null}
            <p>Wind</p>
          </div>
          <div className="min_temp">
            {data.main ? (
              <p className="bold">{data.main.temp_min.toFixed()}°C</p>
            ) : null}
            <p>Min Temp</p>
          </div>
          <div className="max_temp">
            {data.main ? (
              <p className="bold">{data.main.temp_max.toFixed()}°C</p>
            ) : null}
            <p>Max Temp</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Weather;
