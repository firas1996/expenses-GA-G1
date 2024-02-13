import ExpenseItem from "./ExpenseItem";
import Chart from "./ExpensesChart/Chart";
import ChartData from "./ExpensesChart/ChartData";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesMain.css";

const ExpensesMain = ({ data }) => {
  const years = new Set(data.map((item) => item.date.getFullYear()).sort());
  console.log([...years]);
  return (
    <div className="main">
      <ExpensesFilter years={[...years]} />
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
