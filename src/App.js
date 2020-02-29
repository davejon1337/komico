import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Router from "./Router";

function App() {
  const handleClick = e => {
    console.log(e);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Router />
    </div>
  );
}

export default App;
