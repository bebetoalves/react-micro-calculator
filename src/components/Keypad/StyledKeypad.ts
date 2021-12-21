import tw, { styled } from "twin.macro";
import Button from "../Button/Button";

const StyledKeypad = styled.div(() => [tw`grid grid-cols-3 gap-2 sm:gap-3`]);

export const StyledDigitButton = styled(Button)`
  ${tw`bg-gray-100 text-gray-500 transition hover:bg-gray-200`}
`;

export const StyledOperatorButton = styled(Button)`
  ${tw`bg-blue-100 text-blue-500 transition hover:bg-blue-200`}
`;

export const StyledEqualsButton = styled(Button)`
  ${tw`bg-gradient-to-tr from-indigo-500 via-blue-500 to-green-500 text-white font-bold transition opacity-80 hover:opacity-100`}
`;

export default StyledKeypad;
