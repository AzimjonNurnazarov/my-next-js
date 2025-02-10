'use client';
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    if (chartRef.current) {
      const context = chartRef.current.getContext('2d');

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(context, {
        type: 'bar',
        data: {
          labels: ["Marketing", "HR", "Developers", "Design"],
          datasets: [
            {
              label: "Teams Strength",
              data: [1, 5, 3, 10],
              backgroundColor: ['#FABE7A', '#F6866A', '#59E6F6', '#7661E2'],
              borderRadius: 10,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'category',
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="barChart" style={{ width: '100%', height: '400px' }}>
      <canvas ref={chartRef} />
    </div>
  );
};
