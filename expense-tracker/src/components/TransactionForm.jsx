import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function TransactionForm() {
  const { addTransaction, categories } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      date,
      category,
      type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("Food");
    setType("expense");
  };

  return (
    <div>
      <h2>Add Transaction</h2>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
