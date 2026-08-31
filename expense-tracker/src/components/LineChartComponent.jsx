import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";

function LineChartComponent() {
  const { transactions } = useContext(ExpenseContext);

  const data = transactions.map((transaction) => ({
    date: transaction.date,
    income: transaction.type === "income" ? transaction.amount : 0,
    expense: transaction.type === "expense" ? transaction.amount : 0,
  }));

  return (
    <div>
      <h2>Income and Expense</h2>

      {data.length === 0 ? (
        <p>No transaction data.</p>
      ) : (
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line type="monotone" dataKey="income" stroke="#82ca9d" />

          <Line type="monotone" dataKey="expense" stroke="#ff8042" />
        </LineChart>
      )}
    </div>
  );
}

export default LineChartComponent;
