import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
function App() {
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLoading(false);
    });
  };

  useEffect(() => {
    getLocation();
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
            <Forecast />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
