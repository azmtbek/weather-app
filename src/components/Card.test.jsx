import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { cleanup, render } from "@testing-library/react";

import { Card } from "./Card";

it("Card  renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Card />
    </Router>,
    div
  );
});

it("Card  containes temp", () => {
  const div = document.createElement("div");

  const { getByTestId } = render(
    <Router>
      <Card temp="39" />
    </Router>,
    div
  );

  expect(getByTestId(/temp/).textContent).toBe("39");
});
