import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>June 15th 2022</div>
            <div className='expense-item__description'>
                <h2>Video games</h2>
                <div className='expense-item__price'>$52.65</div>
            </div>
        </div>
    );
}

export default ExpenseItem;