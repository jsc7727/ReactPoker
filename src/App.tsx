import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hand from "./components/Hand";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hand handCount={10}></Hand>
      </header>
    </div>
  );
}

export default App;
