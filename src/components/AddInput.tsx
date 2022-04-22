import React, { SyntheticEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../styles/AddInput.css";
import getWeather from "../hooks/getWeather";
const AddInput = ({ setWeather }: any) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  const HandleAddWeather = (e: SyntheticEvent) => {
    e.preventDefault();
    if (city) {
      getWeather(city, setWeather);
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
            <button type="submit" onClick={HandleAddWeather}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInput;
