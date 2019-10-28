import React from "react";
import logo from './logo.svg';
import Nav from "./components/Nav";

import data from "./assets/data.json";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Nav />
      </header>
    </div>
  );
}

export default App;
