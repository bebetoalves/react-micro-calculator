import { useState } from "react";
import { Digit, Operator } from "../Button/ButtonType";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import { StyledCalculatorBody, StyledCalculatorCard } from "./StyledCalculator";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(0);
  const [waitingForOperand, setWaitingForOperand] = useState(true);
  const [pendingOperator, setPendingOperator] = useState<Operator | null>(null);

  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = display;

    if (
      (display === "0" && digit === 0) ||
      (display.length > 12 && waitingForOperand === false)
    ) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display);

    if (pendingOperator !== null && !waitingForOperand) {
      calculate(operand, pendingOperator);
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (pendingOperator !== null && !waitingForOperand) {
      calculate(operand, pendingOperator);
      setPendingOperator(null);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const calculate = (rightOperand: number, pendingOperator: Operator) => {
    let newResult = result;

    if (pendingOperator === "+") {
      newResult += rightOperand;
    }

    setResult(newResult);
    setDisplay(newResult.toString().slice(0, 12));
  };

  const history = () => {
    if (pendingOperator !== null) {
      return `${result} ${pendingOperator} ${waitingForOperand ? "" : display}`;
    }

    return "";
  };

  return (
    <StyledCalculatorBody>
      <StyledCalculatorCard>
        <h5 className="text-center font-light text-lg text-gray-500">
          {import.meta.env.VITE_APP_TITLE ?? "Micro Calculator"}
        </h5>
        <Display result={display} history={history()} />
        <hr className="my-6 border-gray-100" />
        <Keypad
          onDigitButtonClick={onDigitButtonClick}
          onOperatorButtonClick={onOperatorButtonClick}
          onEqualButtonClick={onEqualButtonClick}
        />
      </StyledCalculatorCard>
    </StyledCalculatorBody>
  );
};

export default Calculator;
