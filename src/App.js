import React from 'react';
import './App.css';
import Calculator from './component/Calculator';
import FetchQuote from './component/quoteComponent';

function App() {
  return (
    <div className="App">
      <div className="fetchQuotes">
        <FetchQuote />
      </div>
      <div className="calculatorContainer">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
