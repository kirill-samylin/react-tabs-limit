import React from 'react';
import './App.css';
import {useTabsLimit} from "./hooks/useTabsLimit";


function App() {
  const isValid = useTabsLimit()
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
