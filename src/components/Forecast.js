import React from "react";
import Cards from "./Cards";
import Chart from "./Chart";

export default function Forecast({ forecast }) {
  return (
    <div className="forecast">
      <Chart
        key={forecast.date}
        forecast={forecast === undefined ? "" : forecast}
      />
      <div className="cards">
        {forecast.map((forecast) => {
          return <Cards key={forecast.date} data={forecast} />;
        })}
      </div>
    </div>
  );
}
