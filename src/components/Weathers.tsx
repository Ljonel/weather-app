import React, { useEffect, useState } from "react";
import "../styles/Weathers.css";
import useGetTodayDate from "../hooks/useGetTodayDate";
import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { BsSpeedometer } from "react-icons/bs";
function Weathers() {
  const date = useGetTodayDate();
  const [isActive, setIsActive] = useState(false);
  const [weather, setWeather] = useState<any>([]);
  const handleMenu = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    // let data = [];
    const data = JSON.parse(localStorage.getItem("weather") || "");
    if (data) {
      setWeather({ ...data, icon: data.weather[0].icon, sun: data.weather[0].main });
    }
  }, []);

  return (
    <div className="card-wrapper">
      {weather && (
        <>
          <div className="card-container">
            <div onClick={handleMenu} className={`card ${isActive ? "active" : ""}`}>
              <div className="card-header">
                <h1>{weather.name}</h1>
                <p>{date}</p>
              </div>
              <div className="card-weather">
                <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
                <div className="card-weahter-temp">
                  <h1>{weather?.main?.temp}&#8451;</h1>
                  <h3>{weather.sun}</h3>
                </div>
              </div>
              <div className="menu">
                <div className="menu-el">
                  <h1>
                    <WiStrongWind />
                    Wind
                  </h1>
                  <p>{weather?.wind?.speed}meter/sec</p>
                </div>
                <div className="menu-el">
                  <h1>
                    <WiHumidity />
                    Humidity
                  </h1>
                  <p>{weather?.main?.humidity}%</p>
                </div>
                <div className="menu-el">
                  <h1>
                    <BsSpeedometer />
                    Pressure
                  </h1>
                  <p>{weather?.main?.pressure}hPa</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weathers;
