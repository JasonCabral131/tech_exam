import { createContext } from "react";

export const CalculatorContext = createContext(null);

export const CalculatorOperations = {
    '%': (prevValue, nextValue) => parseFloat(prevValue) %  parseFloat(nextValue),
    '÷': (prevValue, nextValue) => parseFloat(prevValue) /  parseFloat(nextValue),
    '×': (prevValue, nextValue) => parseFloat(prevValue) * parseFloat(nextValue),
    '+': (prevValue, nextValue) => parseFloat(prevValue) + parseFloat(nextValue),
    '−': (prevValue, nextValue) => parseFloat(prevValue) - parseFloat(nextValue),
  }