import React from "react";
// import axios from "axios";

const Weather = () => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Oradea&appid=4775d45af32f6ca2bc8c28c6e6d79cb0`;

  return (
    <div className="container relative">
      <div className="top">
        <div className="location">
          <p className="text-2xl">Oradea</p>
        </div>
        <div className="temp">
          <h2 className="text-7xl">21 C</h2>
        </div>
        <div className="description">
          <p className="text-2xl">Cloudy</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className="text-2xl">22 C</p>
        </div>
        <div className="humidity">
          <p className="text-2xl">20%</p>
        </div>
        <div className="wind">
          <p className="text-2xl">1.2 KMPH</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
