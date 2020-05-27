import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const countUp = () => {
      setCount(count +1);
  }; 

  const countDown = () => {
    setCount(count -1);
  };

  const resetCounter = () => {
    setCount(initialCount);
  };


  return (
    <div>
      <h2>
        The current count is {count}
      </h2>
      <div>
        <button onClick={countUp}>+1</button>
        <button onClick={countDown}>-1</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App initialCount={10} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
