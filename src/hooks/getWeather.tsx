const item = {
  city: "",
  img: "",
  celcius: 0,
  wind: 0,
  main: "",
  humidity: 0,
  pressure: 0,
};

const getWeather = async (c: string, setW: any) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message);
    }

    item.city = res.name;
    item.img = res.weather[0].icon;
    item.celcius = res.main.temp;
    item.wind = res.wind.speed;
    item.main = res.weather[0].main;
    item.humidity = res.main.humidity;
    item.pressure = res.main.pressure;

    localStorage.setItem("weather", JSON.stringify(item));
    setW({ ...item });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default getWeather;
