import React from "react";
import { Digit, Operator } from "../Button/ButtonType";
import StyledKeypad, {
  StyledDigitButton,
  StyledEqualsButton,
  StyledOperatorButton,
} from "./StyledKeypad";

interface PadProps {
  onDigitButtonClick: (digit: Digit) => void;
  onOperatorButtonClick: (operator: Operator) => void;
  onEqualButtonClick: () => void;
}

const Keypad: React.FC<PadProps> = (props) => {
  return (
    <StyledKeypad>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(7)}>
        7
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(8)}>
        8
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(9)}>
        9
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(4)}>
        4
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(5)}>
        5
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(6)}>
        6
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(1)}>
        1
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(2)}>
        2
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(3)}>
        3
      </StyledDigitButton>
      <StyledDigitButton onButtonClick={() => props.onDigitButtonClick(0)}>
        0
      </StyledDigitButton>
      <StyledOperatorButton
        onButtonClick={() => props.onOperatorButtonClick("+")}
      >
        +
      </StyledOperatorButton>
      <StyledEqualsButton onButtonClick={() => props.onEqualButtonClick()}>
        =
      </StyledEqualsButton>
    </StyledKeypad>
  );
};

export default Keypad;
