import './App.css';
import Title from "./components/Title"
import Animals from './components/Animals';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Title title="React Hooks"/>
      <Counter/>
      <Title title="Animals List"/>
      <Animals/>
    </div>
  );
}

export default App;
