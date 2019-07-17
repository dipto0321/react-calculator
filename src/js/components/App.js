import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [error, setError] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleClick = (btn) => {
    setFinished((prevFinished) => {
      if (prevFinished && (!isNaN(btn) || btn === '.')) {
        setTotal(null);
      }
      if (prevFinished && !isNaN(btn)) {
        setTotal(btn);
      }
      if (error) setError(null);
    });

    const newObj = calculate({
      total, next, operation, error, finished,
    }, btn);

    setTotal(newObj.total);
    setNext(newObj.next);
    setOperation(newObj.operation);
    setError(newObj.error);
    setFinished(newObj.finished);
  };

  return (
    <div className="App">
      <div className="container">
        <Display displayArgs={{
          total, next, operation, error, finished,
        }}
        />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};


export default App;
