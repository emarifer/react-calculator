import { ReactElement } from "react";
import { PreviousOperand, CurrentOperand } from "./";
import styles from "./screen.module.css";

interface ScreenProps {
  previousOperand: string;
  currentOperand: string;
  operation: string;
}

export function Screen({
  previousOperand,
  operation,
  currentOperand,
}: ScreenProps): ReactElement {
  const { screen } = styles;

  return (
    <div className={screen}>
      <PreviousOperand
        previousOperand={previousOperand}
        operation={operation}
      />

      <CurrentOperand currentOperand={currentOperand} />
    </div>
  );
}
