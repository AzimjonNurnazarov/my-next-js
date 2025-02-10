'use client'
import React from "react";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(()=>{
        if(chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }

            const context = chartRef.current.getContext('2d');

        const newChart = new Chart(context,{
            type:'bar',
            data:{
                labels: ["Marketing","HR","Developers",'Design'],
                datasets:[
                    {
                        label: "Teams Strength",
                        data:[1,5,3,10],
                        backgroundColor:['#FABE7A','#F6866A','#59E6F6','#7661E2'
                        ],
                        borderRadius: 10,
                    },
                ],
            },
            options:{
                scales:{
                    x:{
                        type:'category'
                    },
                    y:{
                        beginAtZero: true
                    }
                }
            }
        });
        
        chartRef.current.chart = newChart
        }

        
    },[])

  return (
    <div className='barChart'>
        <canvas ref={chartRef}/>
    </div>
  )
}
