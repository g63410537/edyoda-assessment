import React from "react";
import "./styles.css";
import { Container } from "./components/container";
import { Containerone } from "./components/containerOne";
function App() {
  return (
    <div className="navbar">
      <div className="ed">
        <h1>EDYODA</h1>
        <div className="new">
          <h3 className="curse">Courses</h3>
          <h3 className="pri">Price</h3>
          <div className="seco">
            <h3 className="ggg">Login</h3>
            <button className="btn">JOIN NOW</button>
          </div>
        </div>
      </div>
      <Container />
      <Containerone />
    </div>
  );
}

export default App;
