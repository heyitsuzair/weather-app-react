import React, { useEffect, useState } from "react";
import axios from "axios";
export default function CurrentWeather({ longitude, latitude }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({
    main: "",
    temp: "",
    city: "",
    wind: "",
    humidity: "",
    icon: "",
  });
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    timeOfDay: "",
    day: "",
    date: "",
    year: "",
    month: "",
  });
  // updating clock every second
  const updateClock = () => {
    let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    let day = new Date().getDay();
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let month = new Date().toLocaleString("default", { month: "long" });

    currentMin = (currentMin < 10 ? "0" : "") + currentMin;

    currentHour = currentHour > 12 ? currentHour - 12 : currentHour;
    currentHour = currentHour === 0 ? 12 : currentHour;
    console.log(currentHour);
    let timeOfDay = currentHour < 12 ? "AM" : "PM";

    setTime({
      hour: currentHour,
      minute: currentMin,
      timeOfDay: timeOfDay,
      day: day,
      date: date,
      year: year,
      month: month,
    });
  };

  setInterval(() => {
    updateClock();
  }, 1000);
  useEffect(() => {
    updateClock();
  }, []);
  // getting weather info
  const getWeather = async (longitudeIncome, latitudeIncome) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${longitudeIncome}&lon=${latitudeIncome}&appid=0585d63af5210e9a1f194fac36d7b816`;
      await axios.get(url).then((res) => {
        setWeather({
          temp: Math.ceil(res.data.main.temp - 273),
          main: res.data.weather[0].main,
          wind: res.data.wind.speed,
          humidity: res.data.main.humidity,
          icon: res.data.weather[0].icon,
        });
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather(longitude, latitude);
    // eslint-disable-next-line
  }, []);

  //getting city using location iq api
  const getCity = async () => {
    const url =
      " https://us1.locationiq.com/v1/reverse.php?key=pk.ef3482bef6f9010dc39b00224fd95bef&lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&format=json";
    await axios.get(url).then((res) => {
      var city = res.data.address.city;
      setCity(city);
    });
  };
  useEffect(() => {
    getCity();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="current-weather">
          <div>
            {/* Location Start */}
            <div className="location">
              Your City
              <input type="text" value={city} name="city" id="city" disabled />
            </div>
            {/* Location End */}
            <div className="date">
              <span className="hour">{time.hour}</span> :
              <span className="minute">{time.minute}</span>
              <span className="timeofday"> {time.timeOfDay}</span>, {time.date}{" "}
              -{time.month} - {time.year}
            </div>
            <div className="temperature">
              <div className="current-temp">
                <img
                  width={100}
                  id="cloud-png"
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt="hello"
                />
                <div className="temp">{weather.temp} °C </div>
              </div>
              <div className="sky">{weather.main}</div>
            </div>
            <div className="wind">
              <div>
                <h4>Humidity</h4>
                <span>{weather.humidity}%</span>
              </div>
              <div className="wind-speed">
                <h4>Wind Speed</h4>
                <span>{weather.wind} kmj</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
