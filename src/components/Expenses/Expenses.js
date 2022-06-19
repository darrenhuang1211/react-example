import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearFilterHandler = (yearValue) => {
        setFilteredYear(yearValue);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearFilterChange={yearFilterHandler}/>
            {filteredExpenses.map(expense => 
                <ExpenseItem
                    key={expense.id} 
                    date={expense.date} 
                    title={expense.title} 
                    amount={expense.amount} 
                />
            )}
        </Card>
    );
}

export default Expenses;