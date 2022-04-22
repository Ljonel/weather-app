import { WeatherData } from "../interfaces/types";

const getWeather = async (c: string, setWeather: Function) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message);
    }
    const item: WeatherData = {
      city: res.name,
      img: res.weather[0].icon,
      celcius: res.main.temp,
      wind: res.wind.speed,
      main: res.weather[0].main,
      humidity: res.main.humidity,
      pressure: res.main.pressure,
    };

    localStorage.setItem("weather", JSON.stringify(item));
    setWeather({ ...item });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default getWeather;
