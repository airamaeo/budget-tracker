import './App.css';
import BudgetCard from './components/BudgetCard';

export default function App() {
  const budgets = [
    {name: "Groceries", max: 300},
    {name: "Car", max: 200}
  ];

  return(
    <div>
      {budgets.map(({name, max}) => (
        <div>
          <BudgetCard key={name} name={name} max={max} />
        </div>
      ))}
    </div>
  );
}