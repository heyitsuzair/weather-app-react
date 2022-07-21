import React from "react";
export default function Cards() {
  return (
    <>
      <div className="card active">
        <h5 className="today">Today</h5>
        <img id="cloud-card" width={30} alt="TODO" />
        <span className="humidity">Humidity</span>
        <span>30%</span>
      </div>
    </>
  );
}
