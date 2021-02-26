import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { DayWeather } from "./DayWeather";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const mdata = [
  { day: "Wed", weather: "sunny", gradus: 29 },
  { day: "Thu", weather: "cloudy", gradus: 19 },
  { day: "Fri", weather: "rainy", gradus: 20 },
];

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall?";
const lat = "41.2995";
const lon = "69.2401";
const part = ["current", "minutely", "hourly", "alarts"];
const api = "49033a85648b047caca1c92a1526baa2";
const units = "metric";
const URL =
  WEATHER_URL +
  `lat=${lat}&lon=${lon}&exclude=${part}&appid=${api}&units=${units}`;

export const Container = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(mdata);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.daily);
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
      <Router>
        <div>
          <div
            style={{
              border: "1px solid #e0eFF0",
              display: "flex",
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Link to="/">
              <h1>Weather forecast</h1>
            </Link>
          </div>
          <Switch>
            <Route path={`/:day`}>
              <DayWeather />
            </Route>
            <Route path="/">
              <div
                style={{
                  border: "1px solid #e0eFF0",
                  display: "flex",

                  padding: 20,
                  justifyContnent: "center",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                {data.slice(0, 5).map((element, index) => {
                  return (
                    <Card
                      key={index}
                      day={element.dt}
                      temp={element.temp?.day}
                      icon={element.weather[0]?.icon}
                    />
                  );
                })}
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};
