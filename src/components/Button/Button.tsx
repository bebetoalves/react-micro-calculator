import React from "react";
import StyledButton from "./StyledButton";

interface ButtonProps {
  onButtonClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton className={props.className} onClick={props.onButtonClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
