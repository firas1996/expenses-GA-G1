import "./ChartItem.css";

const ChartItem = ({ label, value }) => {
  return (
    <div className="chart-item">
      <div className="chart-item__inner">
        <div className="chart-item__fill"></div>
      </div>
      <label className="chart-item__label">{label}</label>
    </div>
  );
};

export default ChartItem;
