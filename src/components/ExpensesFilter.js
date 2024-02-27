import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, setSelectedDate }) => {
  const changeHandler = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select onChange={changeHandler}>
        {/* {years.map((item) => (
          <option value={item}>{item}</option>
        ))} */}
        {years.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
