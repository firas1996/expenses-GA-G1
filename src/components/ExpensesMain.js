import ExpenseItem from "./ExpenseItem";
import "./ExpensesMain.css";

const ExpensesMain = ({ data }) => {
  return (
    <div className="main">
      {data.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            // key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default ExpensesMain;
