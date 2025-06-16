import React from "react";

export default function AddBudgetForm () {
    return (
        <div>
            <form>
                <label>Budget Name:
                    <input 
                        type="text" 
                        placeholder="Enter Budget Name"
                    />
                </label>
                <br />
                <label>Budget Amount:
                    <input 
                        type="text" 
                        placeholder="Enter Budget Amount" 
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}