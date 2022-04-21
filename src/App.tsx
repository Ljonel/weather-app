import React, { useState } from "react";
import "./App.css";
import AddInput from "./components/AddInput";
import Weathers from "./components/Weathers";

const App = () => {
  return (
    <div className="App">
      <AddInput />
      <Weathers />
    </div>
  );
};

export default App;
