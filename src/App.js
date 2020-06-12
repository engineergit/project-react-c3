import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        hello world from {props.name} and i am age={props.age-20}
      </header>
    </div>
  );
}

export default App;
