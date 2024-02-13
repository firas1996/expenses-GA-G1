import ExpenseItem from "./ExpenseItem";
import Chart from "./ExpensesChart/Chart";
import ChartData from "./ExpensesChart/ChartData";
import "./ExpensesMain.css";

const ExpensesMain = ({ data }) => {
  return (
    <div className="main">
      <ChartData expenses={data} />
      {data.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default ExpensesMain;
