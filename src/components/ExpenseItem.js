import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, price, date }) => {
  const [nTitle, setNTitle] = useState(title);
  var newTitle = title;
  const abc = () => {
    console.log(nTitle);
    setNTitle("sdgghhfhjfg");
    console.log(nTitle);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{nTitle}</h2>
        <button onClick={abc}>Update Title</button>
        <div className="expense-item__price">€ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
