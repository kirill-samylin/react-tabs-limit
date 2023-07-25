import React from 'react';
import './App.css';
import {useFirstTabControl} from "./hooks/useFirstTabControl";


function App() {
  const isValid = useFirstTabControl()
  const text = isValid ? 'working tab' : 'blocked tab'
  return (
    <div className="App">
      <header className="App-header">
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
