import React, { useState } from "react";
import "./App.css";
import AddInput from "./components/AddInput";
import Weathers from "./components/Weathers";
import { WeatherData } from "./interfaces/types";

const App = () => {
  const [weather, setWeather] = useState<WeatherData>();

  return (
    <div className="App">
      <AddInput setWeather={setWeather} />
      <Weathers weather={weather} />
    </div>
  );
};

export default App;
