import {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
    const [year, setYear] = useState('2020');
    
    const yearFilterHandler = (yearValue) => {
        setYear(yearValue);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={year} onYearFilterChange={yearFilterHandler}/>
            {props.items.map(expense => 
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