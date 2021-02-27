import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const lat = "41.2995";
const lon = "69.2401";
const part = ["current", "minutely", "daily", "alarts"];
const api = "49033a85648b047caca1c92a1526baa2";
const units = "metric";
const URL =
  WEATHER_URL +
  `lat=${lat}&lon=${lon}&exclude=${part}&appid=${api}&units=${units}`;

export const DayWeather = () => {
  let { day } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const DAILY = URL + `&dt=${day}`;
  useEffect(() => {
    fetch(DAILY)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.hourly);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return (
      <div
        style={{
          border: "1px solid #e0eFF0",
          display: "flex",
          padding: 20,
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> Error: {error.message}</h1>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div
        style={{
          border: "1px solid #e0eFF0",
          display: "flex",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> Loading...</h1>
      </div>
    );
  } else {
    return (
      <div
        style={{
          border: "1px solid #e0eFF0",
          display: "flex",
          flexWrap: "wrap",
          padding: 20,
          justifyContnent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        {data.slice(0,24).map((element, index) => {
          return (
            <Card
              key={index}
              hourly={element.dt}
              temp={element.temp}
              icon={element.weather[0]?.icon}
            />
          );
        })}
      </div>
    );
  }
};
