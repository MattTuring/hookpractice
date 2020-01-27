import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const  [ idea, setIdea ] = useState()
  const [ ideas, setIdeas ] = useState()

  const addIdea = (idea) => {
    setIdeas(prevIdeas => [prevIdeas, (<p>{idea}</p>)])
  }

  return (
    <div className="App">
      <div>{ideas}</div>
      <input onChange={(event) => {setIdea(event.target.value)}} placeholder="Idea goes here" type='text'/>
      <button onClick={() => {addIdea(idea)}}>ADD IDEA</button>
    </div>
  );
}

export default App;
