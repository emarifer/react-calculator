import { evaluate } from "../utils/utils";
import { CalculatorState, initialState } from "./reducer";

export const enum ActionKind {
  ADD_DIGIT,
  CHOOSE_OPERATION,
  CLEAR,
  DELETE_DIGIT,
  EVALUATE,
}

export interface CalculatorAction {
  type: ActionKind;
  payload: { operation?: string; digit?: string };
}

export function addDigit(
  state: CalculatorState,
  payload: { operation?: string; digit?: string }
): CalculatorState {
  if (state.overwrite) {
    return {
      ...state,
      currentOperand: payload.digit || "",
      overwrite: false,
    };
  }

  if (payload.digit === "0" && state.currentOperand === "0") return state;

  if (payload.digit === "." && state.currentOperand.includes(".")) return state;

  return {
    ...state,
    currentOperand: `${state.currentOperand || ""}${payload.digit || ""}`,
  };
}

export function chooseOperation(
  state: CalculatorState,
  payload: { operation?: string; digit?: string }
): CalculatorState {
  if (state.currentOperand === "" && state.previousOperand === "") return state;

  if (state.currentOperand === "") {
    return {
      ...state,
      operation: payload.operation || "",
    };
  }

  if (state.previousOperand === "") {
    return {
      ...state,
      operation: payload.operation || "",
      previousOperand: state.currentOperand,
      currentOperand: "",
    };
  }

  return {
    ...state,
    previousOperand: evaluate(state),
    operation: payload.operation || "",
    currentOperand: "",
  };
}

export function deleteDigit(state: CalculatorState): CalculatorState {
  if (state.overwrite) {
    return {
      ...state,
      overwrite: false,
      currentOperand: "",
    };
  }

  if (state.currentOperand === "") return state;

  if (state.currentOperand.length === 1) {
    return { ...state, currentOperand: "" };
  }

  return {
    ...state,
    currentOperand: state.currentOperand.slice(0, -1),
  };
}

export function calculate(state: CalculatorState): CalculatorState {
  if (
    state.operation === "" ||
    state.currentOperand === "" ||
    state.previousOperand === ""
  ) {
    return state;
  }

  return {
    ...state,
    overwrite: true,
    previousOperand: "",
    operation: "",
    currentOperand: evaluate(state),
  };
}

export function clear(): CalculatorState {
  return { ...initialState };
}
