import React, { useState } from "react";
import { Card } from "./Card";

const mdata = [
  { day: "Wed", weather: "sunny", gradus: 29 },
  { day: "Thu", weather: "cloudy", gradus: 19 },
  { day: "Fri", weather: "rainy", gradus: 20 },
];

export const Container = () => {
  const [data, setData] = useState(mdata);

  return (
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
      {data.map((element, index) => {
        return <Card key={index} {...element} />;
      })}
    </div>
  );
};
