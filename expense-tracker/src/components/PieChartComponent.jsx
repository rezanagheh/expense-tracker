import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";

function PieChartComponent() {
  const { transactions } = useContext(ExpenseContext);

  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense",
  );

  const data = [];

  expenses.forEach((transaction) => {
    const category = data.find((item) => item.name === transaction.category);

    if (category) {
      category.value += transaction.amount;
    } else {
      data.push({
        name: transaction.category,
        value: transaction.amount,
      });
    }
  });

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

  return (
    <div>
      <h2>Expenses by Category</h2>

      {data.length === 0 ? (
        <p>No expense data.</p>
      ) : (
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}

export default PieChartComponent;
