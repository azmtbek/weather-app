import React from "react";
import { Container } from "./components/Container";

import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container />
      </Router>
    );
  }
}
export default App;
