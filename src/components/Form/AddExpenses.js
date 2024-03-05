import { useState } from "react";
import "./AddExpenses.css";
import AddExpensesForm from "./AddExpensesForm";

const AddExpenses = ({ getData }) => {
  const [isClosed, setIsClosed] = useState(true);
  const handelClose = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div className="new-expense">
      {isClosed ? (
        <AddExpensesForm handelClose={handelClose} getData={getData} />
      ) : (
        <button onClick={handelClose}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpenses;
