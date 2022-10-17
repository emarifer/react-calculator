import { ReactElement } from "react";
import styles from "./screen.module.css";

interface PreviousOperandProps {
  previousOperand: string;
  operation: string;
}

export function PreviousOperand({
  previousOperand,
  operation,
}: PreviousOperandProps): ReactElement {
  return (
    <div className={styles.previousOperand}>
      {previousOperand} {operation}
    </div>
  );
}
