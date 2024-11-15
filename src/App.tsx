import React from "react";
import "./App.css";
import Counter from "@components/Counter";
import CompHooks from "./components/CompHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header-master">
        <Counter />
        <CompHooks />
      </header>
    </div>
  );
}

export default App;
