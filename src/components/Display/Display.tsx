import React from "react";
import {
  StyledDisplay,
  StyledDisplayHistory,
  StyledDisplayResult,
} from "./StyledDisplay";

interface DisplayProps {
  result: string;
  history: string;
  resultClass?: string;
}

const Display: React.FC<DisplayProps> = (props) => {
  return (
    <StyledDisplay>
      <StyledDisplayResult
        className={props.result.length > 8 ? "text-3xl" : "text-5xl"}
      >
        {props.result}
      </StyledDisplayResult>

      <StyledDisplayHistory>{props.history}</StyledDisplayHistory>
    </StyledDisplay>
  );
};

export default Display;
