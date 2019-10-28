import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";

import data from "./assets/data.json";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Nav />
      </header>
      <Home featured={data.featured} />
    </div>
  );
}

export default App;
