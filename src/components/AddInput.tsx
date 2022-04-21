import React, { SyntheticEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../styles/AddInput.css";

const AddInput = ({ setWeather }: any) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [city, setCity] = useState<string>("");

  const getWeather = async (c: string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${process.env.REACT_APP_API_KEY}`);
      const res = await response.json();
      if (!response.ok) {
        throw new Error(res.message);
      }
      setWeather(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddWeather = (e: SyntheticEvent) => {
    e.preventDefault();
    if (city) {
      getWeather(city);
      setCity("");
    }
  };

  return (
    <div className="input-header">
      <div className={isInputActive ? `input-wrapper input-active ` : "input-wrapper"}>
        <AiOutlinePlus onClick={() => setIsInputActive((prev) => !prev)} className="input-icon" />
        <div className="input-search">
          <form>
            <input required type="text" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)} />
            <button type="submit" onClick={handleAddWeather}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInput;
