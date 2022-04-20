import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../styles/AddInput.css";
const AddInput = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [city, setCity] = useState("");

  const handleAddWeather = () => {
    if (city) {
      console.log(city);
    }
  };
  return (
    <div className="input-header">
      <div className={isInputActive ? "input-wrapper input-active" : "input-wrapper"}>
        <AiOutlinePlus onClick={() => setIsInputActive((prev) => !prev)} className="input-icon" />
        <div className="input-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input required type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
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
