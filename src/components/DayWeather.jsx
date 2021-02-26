import React from "react";
import { useParams } from "react-router-dom";
export const DayWeather = () => {
  let { day } = useParams();
  return <h3>Requested topic ID: {day}</h3>;
};
