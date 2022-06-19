import {useState} from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

const initialExpenses = [
  {id: 1, title: 'Video games', amount: 52.65, date: new Date(2022, 5, 15)},
  {id: 2, title: 'Instant noodles', amount: 20.35, date: new Date(2021, 3, 25)},
  {id: 3, title: 'Toilet paper', amount: 15.03, date: new Date(2020, 2, 20)},
  {id: 4, title: 'Gifts', amount: 40, date: new Date(2020, 1, 6)}
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
