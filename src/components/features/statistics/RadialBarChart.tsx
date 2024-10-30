"use client"
import { ApexOptions } from 'apexcharts';
import React from 'react';
import Chart from 'react-apexcharts';

interface RadialBarChartData{
    color:string,
    series:number[],
    label:string ,
}
const RadialBarChart = ({data}:{data:RadialBarChartData}) => {
  const options:ApexOptions = {
    chart: {
      type: 'radialBar',
      height: 300,
    },
    plotOptions: {
      "radialBar": {
        hollow: {
          size: '70%', // Adjust thickness of the ring
        },
        dataLabels: {
          name: {
            show: false, // Hides the label outside the ring
          },
          value: {
            fontSize: '24px',
            show: true,
        
          },
          total: {
            show: true,
            label: data?.label??'30 / 30', // Display score under the percentage
            fontSize: '16px',
            color: '#4E5D6D',
            formatter: function () {
              return data?.label??'30 / 30';
            }
          }
        },
      },
    },
    colors: [data?.color??'#34C759'], // Green color for the ring
  };

  const series = [20]; // Percentage value

  return (
    <div className="chart">
      <Chart options={options} series={series} type="radialBar" width={"100%"} />
    </div>
  );
};

export default RadialBarChart;
