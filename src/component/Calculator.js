import React, { useState } from 'react';
import './style/Calculator.css';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const handleClick = (e) => {
    const result = calculate({ total, next, operation }, e.target.innerText);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };
  return (
    <div id="calculator">
      <div className="display">
        {total}
        {next}
        {operation}
      </div>
      <div id="keypad">
        <button onClick={handleClick} type="button">
          AC
        </button>
        <button onClick={handleClick} type="button">
          +/-
        </button>
        <button onClick={handleClick} type="button">
          %
        </button>
        <button onClick={handleClick} type="button" className="orange">
          ÷
        </button>
        <button onClick={handleClick} type="button">
          7
        </button>
        <button onClick={handleClick} type="button">
          8
        </button>
        <button onClick={handleClick} type="button">
          9
        </button>
        <button onClick={handleClick} type="button" className="orange">
          x
        </button>
        <button onClick={handleClick} type="button">
          4
        </button>
        <button onClick={handleClick} type="button">
          5
        </button>
        <button onClick={handleClick} type="button">
          6
        </button>
        <button onClick={handleClick} type="button" className="orange">
          -
        </button>
        <button onClick={handleClick} type="button">
          1
        </button>
        <button onClick={handleClick} type="button">
          2
        </button>
        <button onClick={handleClick} type="button">
          3
        </button>
        <button onClick={handleClick} type="button" className="orange">
          +
        </button>
        <button onClick={handleClick} type="button" className="zero">
          0
        </button>
        <button onClick={handleClick} type="button">
          .
        </button>
        <button onClick={handleClick} type="button" className="orange">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
