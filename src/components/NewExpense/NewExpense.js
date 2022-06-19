import {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const [expenseFormOpened, setExpenseFormOpened] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setExpenseFormOpened(false);
    };

    const addExpenseHandler = () => {
        setExpenseFormOpened(true);
    };

    const cancelAddExpenseHandler = () => {
        setExpenseFormOpened(false);
    };

    let expenseFormContent;

    if (expenseFormOpened) {
        expenseFormContent = <ExpenseForm onCancel={cancelAddExpenseHandler} onSaveExpenseData={saveExpenseDataHandler} />;
    }
    else {
        expenseFormContent = <button onClick={addExpenseHandler}>Add New Expense</button>;
    }

    return (
        <div className='new-expense'>
            {expenseFormContent}
        </div>
    );
}

export default NewExpense;