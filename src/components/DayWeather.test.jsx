import React from "react";
import ReactDOM from "react-dom";

import {cleanup,  render} from '@testing-library/react';

import { BrowserRouter as Router } from "react-router-dom";
import { DayWeather } from "./DayWeather";

afterEach(cleanup);

it("DayWeather renders", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Router><DayWeather /></Router>, div);
});
