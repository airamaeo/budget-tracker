import './App.css';
import AddBudgetForm from './components/AddBudgetForm';
import BudgetCard from './components/BudgetCard';

export default function App() {
  const budgets = [
    {name: "Groceries", max: 300},
    {name: "Car", max: 200}
  ];

  return(
    <div>
      <h3>Budget Tracker</h3>
      <div className="app-container">
        <AddBudgetForm />
        {budgets.map(({name, max}) => (
          <div>
            <BudgetCard key={name} name={name} max={max} />
          </div>
        ))}
      </div>
    </div>
  );
}