import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import NewsList from "./components/newsList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <NewsList /> */}
    </div>
  );
}

export default App;
