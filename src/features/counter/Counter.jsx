import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByThree, addValue } from './counterSlice.jsx';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="counter-container">
      <h1>Счётчик: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByThree())}>+3</button>
      <div>
        <input 
          type="number" 
          value={inputValue} 
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={() => dispatch(addValue(inputValue))}>Добавить</button>
      </div>
    </div>
  );
};

export default Counter;
