import Dashboard from "./components/Dashboard";
import CategoryManager from "./components/CategoryManager";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import PieChartComponent from "./components/PieChartComponent";
import LineChartComponent from "./components/LineChartComponent";

function App() {
  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <Dashboard />

      <div className="section">
        <CategoryManager />
      </div>

      <div className="section">
        <TransactionForm />
      </div>

      <div className="section">
        <TransactionList />
      </div>

      <div className="charts">
        <div className="section">
          <PieChartComponent />
        </div>

        <div className="section">
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
