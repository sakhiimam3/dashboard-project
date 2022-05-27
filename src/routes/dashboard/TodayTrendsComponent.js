import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const TodayTrendsComponent = () => {

    const [barData, setBarData] = useState({
        labels: ['label 1', 'label 2', 'label 3', 'label 4'],
        datasets: [
            {
              label: "HSN",
              fill: false,
              borderColor: "rgba(255, 0, 0, 0.3)",
              borderWidth: 1,
              pointRadius: 2,
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: "CPX",
              fill: false,
              borderColor: "rgba(0, 255, 0, 0.3)",
              borderWidth: 1,
              pointRadius: 2,
              data: [70, 32, 45, 65, 87, 92, 99]
            },
            {
              label: "Total "+ 21,
              fill: false,
              borderColor: "blue",
              borderWidth: 1,
              pointRadius: 2,
              data: [135, 91, 125, 144, 143, 143, 139]
            }
          ]
        })
      
    
      
    // set options
    const [barOptions, setBarOptions] = useState({
        options : {
         
            legend: {
              position: "right",
              labels: {
                boxWidth: 10
              }
            },
            scales: {
              xAxes: [
                {
                  ticks: { display: false }
                }
              ]
            }
          }
    });
  return (
   
     <>
    
       <div  style={{width:"700px",margin:"auto",}}> 
       
       <Bar  data={barData}
    options={barOptions.options} />
        <Line data={barData} options={barOptions.options} />
        </div>
        <div>
          <h1>changed invoked successfully</h1>

        </div>
     </>
  
      
  )
}

export default TodayTrendsComponent