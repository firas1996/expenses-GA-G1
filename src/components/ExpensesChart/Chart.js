import "./Chart.css";
import ChartItem from "./ChartItem";

const Chart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return <ChartItem label={item.label} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
