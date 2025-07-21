import React, { useState } from 'react';
import { handleError } from '../utils';
import './ExpenseForm.css'; // ✅ Import CSS

function ExpenseForm({ addTransaction }) {
    const [expenseInfo, setExpenseInfo] = useState({
        amount: '',
        text: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseInfo({ ...expenseInfo, [name]: value });
    };

    const addExpenses = (e) => {
        e.preventDefault();
        const { amount, text } = expenseInfo;
        if (!amount || !text) {
            handleError('Please add Expense Details');
            return;
        }
        addTransaction(expenseInfo);
        setExpenseInfo({ amount: '', text: '' });
    };

    return (
        <div className='expense-container'>
            <h1 className='expense-title'>Expense Tracker</h1>
            <form className='expense-form' onSubmit={addExpenses}>
                <div className='expense-input-group'>
                    <label htmlFor='text'>Expense Detail</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='text'
                        placeholder='Enter your Expense Detail...'
                        value={expenseInfo.text}
                    />
                </div>
                <div className='expense-input-group'>
                    <label htmlFor='amount'>Amount</label>
                    <input
                        onChange={handleChange}
                        type='number'
                        name='amount'
                        placeholder='Enter your Amount...'
                        value={expenseInfo.amount}
                    />
                </div>
                <button className='expense-btn' type='submit'>Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;
