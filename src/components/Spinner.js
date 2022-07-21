import React from "react";

export default function Spinner() {
  return (
    <>
      <div class="spinner">
        <div class="lds-roller">
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
