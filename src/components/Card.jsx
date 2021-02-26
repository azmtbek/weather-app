import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import moment from "moment";

export const Card = ({ day, temp, icon, hourly }) => {
  const thisday = moment(day * 1000).format("ddd D MMM");
  const hours = moment(hourly * 1000).format("ddd D MMM H:mm");

  return (
    <Link to={`/${day}`}>
      <div
        style={{
          border: "1px solid #D0DFF0",
          display: "flex",
          flexDirection: "column",
          padding: 20,
          //   width: 400,
          justifyContnent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        {day && <div> {thisday} </div>}
        {hourly && <div> {hours}</div>}

        <div>
          <img
            style={{ width: 50, height: 50 }}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={`${icon}`}
          />
        </div>
        <div>{temp}</div>
      </div>
    </Link>
  );
};
