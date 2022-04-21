import React, { useEffect, useState } from "react";
import "../styles/Weathers.css";
import useGetTodayDate from "../hooks/useGetTodayDate";
import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { BsSpeedometer } from "react-icons/bs";
function Weathers({ weather }: any) {
  const date = useGetTodayDate();
  useEffect(() => {
    console.log(weather);
  }, [weather]);
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="card-wrapper">
      {weather && (
        <>
          {" "}
          <div className="card-container">
            <div onClick={handleMenu} className={`card ${isActive ? "active" : ""}`}>
              <div className="card-header">
                <h1>{weather.name}</h1>
                <p>{date}</p>
              </div>
              <div className="card-weather">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                <div className="card-weahter-temp">
                  <h1>{Math.floor(weather.main.temp)}&#8451;</h1>
                  <h3>{weather.weather[0].main}</h3>
                </div>
              </div>
              <div className="menu">
                <div className="menu-el">
                  <h1>
                    <WiStrongWind />
                    Wind
                  </h1>
                  <p>{weather.wind.speed}meter/sec</p>
                </div>
                <div className="menu-el">
                  <h1>
                    <WiHumidity />
                    Humidity
                  </h1>
                  <p>{weather.main.humidity}%</p>
                </div>
                <div className="menu-el">
                  <h1>
                    <BsSpeedometer />
                    Pressure
                  </h1>
                  <p>{weather.main.pressure}hPa</p>
                </div>
              </div>
            </div>

            {/* <div onClick={handleMenu} className={isActive ? "menu menu-active" : "menu"}>
              as
            </div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Weathers;
