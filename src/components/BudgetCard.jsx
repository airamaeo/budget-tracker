import React from "react";

export default function BudgetCard ({name, max}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Max: €{max}</p>
        </div>
    );
}