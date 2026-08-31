import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div
              className={`transaction ${
                transaction.type === "income" ? "income" : "expense"
              }`}
              key={transaction.id}
            >
              <div>
                <h3>{transaction.title}</h3>
                <p>{transaction.category}</p>
                <p>{transaction.date}</p>
              </div>

              <div className="transaction-right">
                <strong>
                  {transaction.type === "income" ? "+" : "-"}$
                  {transaction.amount}
                </strong>

                <button onClick={() => deleteTransaction(transaction.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
