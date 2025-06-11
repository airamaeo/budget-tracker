import React from "react";

export default function BudgetCard ({name, max, expenses}) {
    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount, 
        0
    );

    const remBudget = max - total;

    return (
        <div>
            <h3>{name}</h3>
            <p>Max: €{max}</p>
            <p>Total Expense: €{total}</p>
            <p>Budget Remaining: €{remBudget}</p>
        </div>
    );
}