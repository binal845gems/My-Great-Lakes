import React from 'react';
import './ExpenseList.css';

const dummyExpenses = [
  { id: 1, name: 'Boat Rental', amount: 150 },
  { id: 2, name: 'Camping Fee', amount: 75 },
];

function ExpenseList() {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {dummyExpenses.map(expense => (
        <div key={expense.id} className="expense-item">
          <span>{expense.name}</span>
          <span>${expense.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
