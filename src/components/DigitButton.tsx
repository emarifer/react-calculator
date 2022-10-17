import { ReactElement } from "react";
import { ActionKind, CalculatorAction } from "../reducer/actions";

interface DigitButtonProps {
  digit: string;
  dispatch: React.Dispatch<CalculatorAction>;
}

export function DigitButton({
  digit,
  dispatch,
}: DigitButtonProps): ReactElement {
  return (
    <button
      onClick={() =>
        dispatch({ type: ActionKind.ADD_DIGIT, payload: { digit } })
      }
    >
      {digit}
    </button>
  );
}
