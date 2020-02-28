import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router />
    </div>
  );
}

export default App;
