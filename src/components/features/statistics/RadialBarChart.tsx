"use client"
import { ApexOptions } from 'apexcharts';
import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface RadialBarChartData{
    color:string,
    series:number[],
    label?:string ,
    title:string,
    showTotal?:boolean
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
          size: '65%', // Adjust thickness of the ring
        },
   
        dataLabels: {
          name: {
            show: true, // Hides the label outside the ring
          },
          value:{
            show:data?.showTotal,
            fontSize:"12px",
          },
          total: {
            show: true,
            label: data?.title??'', 
            fontSize: '28px',
            color: '#4E5D6D',
            formatter: function () {
              return `${data?.label}`;
            }
          }
        },
      },
    },
    colors: [data?.color??'#34C759'], //
    labels:[`${data.title}`], 
    stroke: {
      lineCap: "round",
    },
  };

  const series = [...data.series]; // Percentage value

  return (
    <div className="chart">
      <Chart options={options}  series={series} type="radialBar" width={"100%"} />
    </div>
  );
};

export default RadialBarChart;
