import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="spinner">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Please Allow Location From Browser To Continue</h1>
      </div>
    </>
  );
}
