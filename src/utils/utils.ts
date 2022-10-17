import { CalculatorState } from "../reducer/reducer";

export function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: CalculatorState): string {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";

  let computation: number = 0;

  switch (operation) {
    case "+":
      computation = prev + current;
      break;

    case "−":
      computation = prev - current;
      break;

    case "×":
      computation = prev * current;
      break;

    case "÷":
      if (!current) break;
      computation = prev / current;
      break;
  }

  if (!computation && !current) return "Division by zero is not defined";

  let [integer, decimal] = computation.toPrecision(15).split(".");

  decimal = decimal.replace(/0+$/, "");

  if (decimal) return `${integer}.${decimal}`;

  return integer;
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand: string, prev?: boolean): string {
  if (operand === "") return "";

  if (operand === "Division by zero is not defined") return operand;

  let [integer, decimal] = operand.split(".");

  if (prev && decimal) decimal = decimal.replace(/0+$/, ""); // Remove zeros from the end.

  if (!decimal) return `${INTEGER_FORMATTER.format(parseInt(integer) || 0)}`;

  return `${INTEGER_FORMATTER.format(parseInt(integer) || 0)}.${decimal}`;
}

/*
 * How to Trim Characters from a String in JavaScript
 * https://masteringjs.io/tutorials/fundamentals/trim
 */
