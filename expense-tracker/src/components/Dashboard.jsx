import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function Dashboard() {
  const { transactions } = useContext(ExpenseContext);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total Income</h3>
        <p>${totalIncome}</p>
      </div>

      <div className="card">
        <h3>Total Expense</h3>
        <p>${totalExpense}</p>
      </div>

      <div className="card">
        <h3>Balance</h3>
        <p>${balance}</p>
      </div>
    </div>
  );
}

export default Dashboard;
