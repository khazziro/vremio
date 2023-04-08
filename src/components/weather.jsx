import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (location !== "") {
      timer = setTimeout(() => {
        axios
          .get(
            `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${location}&sort=-population&limit=3`,
            {
              headers: {
                "X-RapidAPI-Key":
                  "d2b65efed7mshaa2e1e2c4603002p18bfd7jsna19e6ad982f6",
                "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
              },
            }
          )
          .then((res) => {
            const data = res.data.data;
            const location = data.map((city) => city.name);
            setSuggestions(location);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000); // Delay the API call by 1000ms
    } else {
      setSuggestions([]);
    }
    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, [location]);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSuggestionClick = async (location) => {
    setLoading(true);
    setLocation(location);
    setSuggestions([]);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4775d45af32f6ca2bc8c28c6e6d79cb0`;
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="flex flex-col justify-around container max-w-screen-md h-full relative m-auto p-4 overflow-y-hidden">
      <div className="search text-center relative ">
        <input
          className={`py-3 px-5 w-full outline-none bg-white bg-opacity-20 placeholder:text-white ${
            suggestions.length > 0 ? "rounded-t-3xl" : "rounded-3xl"
          } `}
          value={location}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter Location(ex: London)"
        />
        {loading && <p>Loading...</p>}
        {suggestions.length > 0 && (
          <ul className="absolute right-0 z-10 w-full origin-top-right rounded-b-3xl bg-white backdrop-blur-sm bg-opacity-20 focus:outline-none">
            {suggestions.map((location, index) => (
              <li
                className="block px-4 py-2 text-sm"
                key={index}
                onClick={() => handleSuggestionClick(location)}
              >
                {location}
              </li>
            ))}
          </ul>
        )}
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
