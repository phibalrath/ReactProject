import React from 'react';
import './App.css';
import Name from './components/name-component'
import OneChoiceComponent from './components/one-choice-component'
import TwoChoiceComponent from './components/two-choice-component'


function App() {
  return (
    <div className="App">
     <Name />
     <OneChoiceComponent />
     <TwoChoiceComponent />
    </div>
  );
}

export default App;
