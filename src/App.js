import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expnese = [
    { id: 'e1', title: 'Car Insurance 1', amount: 194.67, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Car Insurance 2', amount: 294.67, date: new Date(2022, 3, 28) },
    { id: 'e3', title: 'Car Insurance 3', amount: 394.67, date: new Date(2023, 4, 28) },
    { id: 'e4', title: 'Car Insurance 4', amount: 494.67, date: new Date(2024, 6, 28) }
  ]
  return (
    <div className="App">
      <h2>Bismillah</h2>
      <p>Let's start React App</p>

      <ExpenseItem title={expnese[0].title} amount={expnese[0].amount} date={expnese[0].date} />
      <ExpenseItem title={expnese[1].title} amount={expnese[1].amount} date={expnese[1].date} />
      <ExpenseItem title={expnese[2].title} amount={expnese[2].amount} date={expnese[2].date} />
      <ExpenseItem title={expnese[3].title} amount={expnese[3].amount} date={expnese[3].date} />

    </div>
  );
}

export default App;
