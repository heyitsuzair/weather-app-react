import React from "react";
import Cards from "./Cards";
import Chart from "./Chart";

export default function Forecast() {
  return (
    <div className="forecast">
      <Chart />
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
