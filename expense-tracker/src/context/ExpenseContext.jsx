import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem("categories");

    return savedCategories
      ? JSON.parse(savedCategories)
      : ["Food", "Transport", "Bills", "Entertainment"];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        categories,
        addTransaction,
        deleteTransaction,
        addCategory,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
