import './App.css';
import AddBudgetForm from './components/AddBudgetForm';
import BudgetCard from './components/BudgetCard';

export default function App() {
  const budgets = [
    {name: "Groceries", max: 300},
    {name: "Car", max: 200},
    {name: "Bills", max: 180},
    {name: "Savings", max: 1500}
  ];

  const expenses = [
    {id:"e1", budgetId:"Groceries", name:"Eggs", amount:3.79},
    {id:"e2", budgetId:"Groceries", name:"Milk", amount:3.50},    
    {id:"e3", budgetId:"Car", name:"Tyres", amount:160},
    {id:"e4", budgetId:"Savings", name:"Joint Account", amount:1000},
    {id:"e5", budgetId:"Bills", name:"Netflix", amount:20.99}
  ];

  return(
    <div>
      <h3>Budget Tracker</h3>
      <div className="app-container">
        <AddBudgetForm />
        {budgets.map(({name, max}) => {
          const expensesForBudget = expenses.filter((expense) =>
            expense.budgetId === name
          );
          return (
          <div>
            <BudgetCard key={name} name={name} max={max} expenses={expensesForBudget}/>
          </div>
          );
        })}
      </div>
    </div>
  );
}