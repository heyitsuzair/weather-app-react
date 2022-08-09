import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
export default function LineChart({ forecast }) {
  const userData = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [
          `${
            forecast[0].hour[0] === undefined ? "" : forecast[0].hour[0].temp_c
          }`,
          `${
            forecast[0].hour[1] === undefined ? "" : forecast[0].hour[1].temp_c
          }`,
          `${
            forecast[0].hour[2] === undefined ? "" : forecast[0].hour[2].temp_c
          }`,
          `${
            forecast[0].hour[3] === undefined ? "" : forecast[0].hour[3].temp_c
          }`,
          `${
            forecast[0].hour[4] === undefined ? "" : forecast[0].hour[4].temp_c
          }`,
          `${
            forecast[0].hour[5] === undefined ? "" : forecast[0].hour[5].temp_c
          }`,
        ],
        fill: true,
        backgroundColor: "rgba(107, 157, 250, 0.15)",
        backgroundOpacity: 0.5,
        borderColor: "#6b9dfa",
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 9,
        pointBorderColor: "white",
        pointBackgroundColor: "#6b9dfa",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        boxPadding: 5,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      {forecast[0].hour[5] === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <div className="temp-chart">
          1 Hour Forecast In °C
          <Line data={userData} options={options} width={850} height={240} />
        </div>
      )}
    </>
  );
}
