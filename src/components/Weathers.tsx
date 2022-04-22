import React, { useEffect, useState } from "react";
import "../styles/Weathers.css";
import useGetTodayDate from "../hooks/useGetTodayDate";
import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { BsSpeedometer } from "react-icons/bs";
function Weathers({ weather }: any) {
  const date = useGetTodayDate();
  const [isActive, setIsActive] = useState(false);
  // const [weather, setWeather] = useState<any>([]);
  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="card-wrapper">
      {weather && Object.keys(weather).length === 0 ? null : (
        <>
          <div className="card-container">
            <div onClick={handleMenu} className={`card ${isActive ? "active" : ""}`}>
              <div className="card-front">
                <div className="card-header">
                  <h1>{weather.city}</h1>
                  <p>{date}</p>
                </div>
                <div className="card-weather">
                  <img src={`http://openweathermap.org/img/wn/${weather.img}@2x.png`} alt="" />
                  <div className="card-weahter-temp">
                    <h1>{Math.floor(weather.celcius)}&#8451;</h1>
                    <h3>{weather.sun}</h3>
                  </div>
                </div>
              </div>

              <div className="menu">
                <div className="menu-el">
                  <h1>
                    <WiStrongWind />
                    Wind
                  </h1>
                  <p>{weather.wind} m/s</p>
                </div>
                <div className="menu-el">
                  <h1>
                    <WiHumidity />
                    Humidity
                  </h1>
                  <p>{weather.humidity} %</p>
                </div>
                <div className="menu-el">
                  <h1>
                    <BsSpeedometer />
                    Pressure
                  </h1>
                  <p>{weather.pressure} hPa</p>
                </div>
              </div>
            </div>
            <div className="chat-bubble">Tap to see details</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weathers;
