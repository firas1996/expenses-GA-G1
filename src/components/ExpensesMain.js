import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Chart from "./ExpensesChart/Chart";
import ChartData from "./ExpensesChart/ChartData";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesMain.css";

const ExpensesMain = ({ data }) => {
  const years = [
    ...new Set(data.map((item) => item.date.getFullYear()).sort()),
  ];
  // console.log(years);
  const [selectedDate, setSelectedDate] = useState(years[0]);
  const filtredData = data.filter((item) => {
    return selectedDate == item.date.getFullYear();
  });
  console.log(filtredData);
  return (
    <div className="main">
      <ExpensesFilter setSelectedDate={setSelectedDate} years={years} />
      <ChartData expenses={filtredData} />
      {filtredData.map((expense) => {
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
