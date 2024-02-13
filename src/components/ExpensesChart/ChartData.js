import React from "react";
import Chart from "./Chart";

const ChartData = ({ expenses }) => {
  const data = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const item of expenses) {
    data[item.date.getMonth()].value += item.price;
  }
  const values = data.map((item) => item.value);
  const max = Math.max(...values);
  const sum = values.reduce((a, b) => {
    return a + b;
  });
  console.log(sum);
  return <Chart data={data} max={max} sum={sum} />;
};

export default ChartData;
