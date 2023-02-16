import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hannah Pelingon
        </p>
        <Header />
        <GoalList />
      </header>
    </div>
  );
}

export default App;
