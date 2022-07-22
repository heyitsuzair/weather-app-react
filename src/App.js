import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [forecast, setForecast] = useState([]);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLoading(false);
    });
  };
  const getForecast = async () => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=cdac4295cfeb4d67979101632222207&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`;
    await axios.get(url).then(async (res) => {
      await setForecast(res.data.forecast.forecastday);
      setLoading(false);
    });
  };

  useEffect(() => {
    getLocation();
    getForecast();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className="parent">
          <div className="container">
            <CurrentWeather longitude={longitude} latitude={latitude} />
            <Forecast forecast={forecast} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
