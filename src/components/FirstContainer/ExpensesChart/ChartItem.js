import "./ChartItem.css";

const ChartItem = ({ label, value, max, sum }) => {
  let fill = "0%";
  if (max > 0) {
    fill = Math.round((value / max) * 100);
  }
  return (
    <div className="chart-item">
      <div className="chart-item__inner">
        <div className="chart-item__fill" style={{ height: `${fill}%` }}></div>
      </div>
      <label className="chart-item__label">{label}</label>
    </div>
  );
};

export default ChartItem;
