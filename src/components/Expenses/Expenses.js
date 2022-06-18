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
            <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount} />
            <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount} />
            <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount} />
            <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title} amount={props.expenses[3].amount} />
        </Card>
    );
}

export default Expenses;