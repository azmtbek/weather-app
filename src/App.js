import React from "react";
import { Container } from "./components/Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather forecast</h1>
        <Container />
      </div>
    );
  }
}
export default App;
