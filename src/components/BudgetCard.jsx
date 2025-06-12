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
            <h3>{name}</h3>
            <div className="budget-info">
                <p>Max: <span>€{max}</span> </p>
                <p>Total Expense: <span>€{total}</span> </p>
                <p>Budget Remaining: <span>€{remBudget}</span> </p>
            </div>
        </div>
    );
}