const getWeather = async (c: string) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message);
    }
    // setWeather(res);
    localStorage.setItem("weather", JSON.stringify(res));
    window.location.reload();
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default getWeather;
