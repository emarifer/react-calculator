import { ReactElement } from "react";
import styles from "./screen.module.css";

interface CurrentOperandProps {
  currentOperand: string;
}

export function CurrentOperand({
  currentOperand,
}: CurrentOperandProps): ReactElement {
  return <div className={styles.currentOperand}>{currentOperand}</div>;
}
