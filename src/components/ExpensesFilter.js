import "./ExpensesFilter.css";

const ExpensesFilter = () => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
