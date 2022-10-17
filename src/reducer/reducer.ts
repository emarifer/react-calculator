import { useReducer } from "react";
import {
  ActionKind,
  addDigit,
  calculate,
  CalculatorAction,
  chooseOperation,
  clear,
  deleteDigit,
} from "./actions";

// Model State
export type CalculatorState = {
  overwrite: boolean;
  previousOperand: string;
  currentOperand: string;
  operation: string;
};

export const initialState: CalculatorState = {
  overwrite: false,
  previousOperand: "",
  currentOperand: "",
  operation: "",
};

function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.ADD_DIGIT:
      return addDigit(state, payload);

    case ActionKind.CHOOSE_OPERATION:
      return chooseOperation(state, payload);

    case ActionKind.CLEAR:
      return clear();

    case ActionKind.DELETE_DIGIT:
      return deleteDigit(state);

    case ActionKind.EVALUATE:
      return calculate(state);

    default:
      return state;
  }
}

export default function useReducerApp() {
  return useReducer(calculatorReducer, initialState);
}
