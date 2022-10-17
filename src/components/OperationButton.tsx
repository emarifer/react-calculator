import { ReactElement } from "react";
import { ActionKind, CalculatorAction } from "../reducer/actions";

export interface OperationButtonProps {
  operation: string;
  dispatch: React.Dispatch<CalculatorAction>;
}

export function OperationButton({
  operation,
  dispatch,
}: OperationButtonProps): ReactElement {
  return (
    <button
      onClick={() =>
        dispatch({ type: ActionKind.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
