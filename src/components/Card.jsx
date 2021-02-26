import React from "react";

import { Link } from "react-router-dom";

export const Card = ({ day, weather, gradus }) => {
  return (
    <Link to={`/${day}`}>
      <div
        style={{
          border: "1px solid #F0FFF0",
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
        <div>
          <img
            style={{ width: 50, height: 50 }}
            src={`/${weather}.svg`}
            alt="weather"
          />
        </div>
        <div>{gradus}</div>
      </div>
    </Link>
  );
};
