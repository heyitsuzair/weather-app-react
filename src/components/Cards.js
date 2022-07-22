import React from "react";
export default function Cards({ data }) {
  let day = "";
  let date = new Date();
  var today = date.getDay();
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //eslint-disable-next-line
  switch (new Date(data.date).getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return (
    <>
      <div className={`card ${daylist[today] === day ? "active" : ""} `}>
        <h5 className="today">{daylist[today] === day ? "Today" : day}</h5>
        <img
          id="cloud-card"
          src="//cdn.weatherapi.com/weather/64x64/day/302.png"
          width={30}
          alt="TODO"
        />
        <div className="day-temp">
          <div className="day-temp-inner">
            <span className="humidity">Humidity</span>
            <span>{data.day.avghumidity}%</span>
          </div>
        </div>
      </div>
    </>
  );
}
