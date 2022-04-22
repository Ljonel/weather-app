import React, { useState } from "react";
import "./App.css";
import AddInput from "./components/AddInput";
import Weathers from "./components/Weathers";
const App = () => {
  let [weather, setW] = useState<any>({});
  if ("weather" in localStorage) {
    weather = JSON.parse(localStorage.getItem("weather") || "");
  }
  return (
    <div className="App">
      <AddInput setW={setW} w={weather} />
      <Weathers weather={weather} />
    </div>
  );
};

export default App;
