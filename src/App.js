import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {title: 'Video games', amount: 52.65, date: new Date(2022, 5, 15)},
    {title: 'Instant noodles', amount: 20.35, date: new Date(2022, 3, 25)},
    {title: 'Toilet paper', amount: 15.03, date: new Date(2022, 2, 20)},
    {title: 'Gifts', amount: 40, date: new Date(2022, 1, 6)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
