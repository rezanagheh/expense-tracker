import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function CategoryManager() {
  const { categories, addCategory } = useContext(ExpenseContext);

  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      return;
    }

    addCategory(category);
    setCategory("");
  };

  return (
    <div>
      <h2>Categories</h2>

      <form className="category-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Add Category</button>
      </form>

      <div className="category-list">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
    </div>
  );
}

export default CategoryManager;
