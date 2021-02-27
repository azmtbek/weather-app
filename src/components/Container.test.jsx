import React from "react";
import ReactDOM from "react-dom";

import {cleanup,  render} from '@testing-library/react';

import { Container } from "./Container";

afterEach(cleanup);

it("Container renders", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Container />, div);
});
