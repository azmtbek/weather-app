import React from "react";

export const Card = ({ day, weather, gradus }) => {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        width: 100,
        justifyContnent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <div>{day}</div>
      <div><img style={{width:50, height:50}} src={`/${weather}.svg`} alt="weather"/></div>
      <div>{gradus}</div>
    </div>
  );
};
