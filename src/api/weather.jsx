import React from "react";

const Weather = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Oradea&appid=4775d45af32f6ca2bc8c28c6e6d79cb0`;
  console.log(url);
  return (
    <div className="container relative">
      <div className="top">
        <div className="location">
          <p className="text-xl">Oradea</p>{" "}
        </div>
        <div className="temperature">
          <h2 className="text-8xl">15°C</h2>{" "}
        </div>
        <div className="description">
          <p className="text-xl">Clouds</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels_like">
          <p className="text-xl">17°C</p>
        </div>
        <div className="humidity">
          <p className="text-xl">20%</p>{" "}
        </div>
        <div className="wind">
          <p className="text-xl">1.2 km/ph</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
