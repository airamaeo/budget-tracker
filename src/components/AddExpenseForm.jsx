import React from "react";

export default function AddExpenseForm () {
    return (
        <div className="expense-input-container">
            <form>
                <label>Payee?
                    <input 
                        type="text" 
                        placeholder="Whom did you pay?"
                    />
                </label>
                <br />
                <label>Amount:
                    <input 
                        type="number"
                        placeholder="Enter Amount"
                    />
                </label>
                <label>Category:
                    <select>
                        <option value="Select Category">Select Category</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Car">Car</option>
                        <option value="Bills">Bills</option>
                        <option value="Savings">Savings</option>
                    </select>
                </label>
            </form>
        </div>
    )
}