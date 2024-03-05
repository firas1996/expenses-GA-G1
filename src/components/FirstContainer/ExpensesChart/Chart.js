import "./Chart.css";
import ChartItem from "./ChartItem";

const Chart = ({ data, sum, max }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return (
          <ChartItem
            key={item.label}
            label={item.label}
            value={item.value}
            max={max}
            sum={sum}
          />
        );
      })}
    </div>
  );
};

export default Chart;
