import "./Chart.css";
import ChartItem from "./ChartItem";

const Chart = ({ data, sum, max }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return (
          <ChartItem
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
