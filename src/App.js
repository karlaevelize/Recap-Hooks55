import './App.css';
import Title from "./components/Title"
import Animals from './components/Animals';
import Counter from './components/Counter';
import Fetching from './components/Fetching';
import FetchingObject from './components/FetchingObject';

function App() {
  return (
    <div className="App">
      <Title title="useEffect"/>
      <FetchingObject/>
      <Fetching/> 
      <Title title="React Hooks"/>
      <Counter/>
      <Title title="Animals List"/>
      <Animals/>
    </div>
  );
}

export default App;
