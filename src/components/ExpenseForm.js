import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!expense || !amount) return alert('Please fill in all fields');
    alert(`Expense added: ${expense} - $${amount}`);
    setExpense('');
    setAmount('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense name"
        value={expense}
        onChange={e => setExpense(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
