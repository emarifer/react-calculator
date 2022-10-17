import { ReactElement } from "react";
import { ActionKind } from "../reducer/actions";
import useReducerApp from "../reducer/reducer";
import { formatOperand } from "../utils/utils";
import { Screen, OperationButton, DigitButton } from "./";
import styles from "./calculator.module.css";

export function Calculator(): ReactElement {
  const { calculatorGrid, spanTwo } = styles;

  const [{ previousOperand, currentOperand, operation }, dispatch] =
    useReducerApp();

  return (
    <div className={calculatorGrid}>
      <Screen
        previousOperand={formatOperand(previousOperand, true)}
        operation={operation}
        currentOperand={formatOperand(currentOperand)}
      />

      <button
        className={spanTwo}
        onClick={() => dispatch({ type: ActionKind.CLEAR, payload: {} })}
      >
        AC
      </button>
      <button
        onClick={() => dispatch({ type: ActionKind.DELETE_DIGIT, payload: {} })}
      >
        DEL
      </button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="×" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="−" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <button
        className={spanTwo}
        onClick={() => dispatch({ type: ActionKind.EVALUATE, payload: {} })}
      >
        =
      </button>
    </div>
  );
}

/*
 * https://youtu.be/DgRrrOt0Vr8
 * https://github.com/WebDevSimplified/react-calculator
 */
