"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { getLineChartData } from "@/axios";

export const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = getLineChartData().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "line",

        data: {
          labels: [
            "Oct 2021",
            "Nov 2021",
            "Dec 2021",
            "Jan 2022",
            "Feb 2022",
            "Mar 2022",
          ],

          datasets: [
            {
              label: "Achieved",
              data: [6, 3, 4, 7, 4, 7],
              borderColor: "#7661E2",
              borderWidth: 1,
              backgroundColor: "#7661E2",
              tension: 0.4,
            },
            {
              label: "Target",
              data: [4, 5, 4, 5, 3, 7],
              borderColor: "#F6866A",
              borderWidth: 1,
              backgroundColor: "#F6866A",
              tension: 0.4,
            },
          ],
        },

        options: {
          scales: {
            y: {
              type: "linear",
            },
            x: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div className="lineChart">
      <canvas ref={chartRef} />
    </div>
  );
};
