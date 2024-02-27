import ExpensesMain from "./components/FirstContainer/ExpensesMain";
import AddExpenses from "./components/Form/AddExpenses";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "Car",
      price: 5000,
      date: new Date(2024, 7, 8),
    },
    {
      id: 2,
      title: "TV",
      price: 1499,
      date: new Date(2023, 5, 18),
    },
    {
      id: 3,
      title: "Education",
      price: 7200,
      date: new Date(2023, 11, 15),
    },
    {
      id: 4,
      title: "Voyage",
      price: 2500,
      date: new Date(2025, 8, 10),
    },
  ];
  return (
    <div>
      <AddExpenses />
      <ExpensesMain data={expensesData} />
    </div>
  );
}

export default App;
