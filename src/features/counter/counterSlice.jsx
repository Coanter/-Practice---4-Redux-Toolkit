// src/features/counter/counterSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Увеличить на 1
    increment: (state) => {
      state.value += 1;
    },
    // Уменьшить на 1
    decrement: (state) => {
      state.value -= 1;
    },
    // Увеличить на 3
    incrementByThree: (state) => {
      state.value += 3;
    },
    // Увеличить на произвольное значение
    addValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Экспортируем экшены и редьюсер
export const { increment, decrement, incrementByThree, addValue } = counterSlice.actions;
export default counterSlice.reducer;
