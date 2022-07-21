import React, { useState } from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
export default function LineChart(props) {
  // eslint-disable-next-line
  const [userData, setUserData] = useState({
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "Temperature",
        data: [0, 53, 85, 45, 30, 53],
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
  });
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
    },
  };
  return (
    <div className="temp-chart">
      Temperature
      {<Line data={userData} options={options} width={850} height={240} />}
    </div>
  );
}
