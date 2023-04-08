import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4775d45af32f6ca2bc8c28c6e6d79cb0`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((r) => {
        setData(r.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="flex flex-col justify-around container max-w-screen-md h-full relative m-auto p-4 overflow-y-hidden">
      <div className="search contents text-center">
        <input
          className="py-3 px-5 rounded-3xl bg-white bg-opacity-20 placeholder:text-white"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location(ex: London)"
        />
      </div>
      <div className="w-full my-4 mx-auto">
        <div>
          <p className="text-2xl">{data.name}</p>
        </div>
        <div>
          {data.main ? (
            <h2 className="text-7xl font-bold">{data.main.temp.toFixed()}°C</h2>
          ) : null}
        </div>
        <div className="relative right-[-90%] origin-top-left -rotate-90">
          {data.weather ? (
            <p className="text-2xl">{data.weather[0].description}</p>
          ) : null}
        </div>
      </div>
      {data.name !== undefined && (
        <div className="flex w-full justify-evenly text-center my-4 mb-0 mx-auto p-4 rounded-xl bg-white bg-opacity-20">
          <div className="text-xl mr-2">
            {data.main ? (
              <p className="font-bold">{data.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p className="text-base">Feels Like</p>
          </div>
          <div className="text-xl mr-2">
            {data.main ? (
              <p className="font-bold">{data.main.humidity}%</p>
            ) : null}
            <p className="text-base">Humidity</p>
          </div>
          <div className="text-xl">
            {data.wind ? <p className="font-bold">{data.wind.speed}</p> : null}
            <p className="text-base">Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
