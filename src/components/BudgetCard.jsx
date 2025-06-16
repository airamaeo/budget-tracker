import React from "react";
import '../styles/BudgetCard.css';

export default function BudgetCard ({name, max, expenses}) {
    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount, 
        0
    );

    const remBudget = max - total;

    return (
        <div className="budget-card">
            <h2>{name}</h2>
            <div className="budget-info">
                <h3>Budget Amount: <span>€{max}</span> </h3>
                <h3>Total Expenses: <span>€{total}</span> </h3>
                <h3>Budget Remaining: <span>€{remBudget}</span> </h3>
            </div>
        </div>
    );
}