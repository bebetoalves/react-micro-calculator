import tw, { styled } from "twin.macro";

const StyledDisplay = styled.div(() => [tw`pt-6 overflow-hidden`]);

const StyledDisplayResult = styled.div(() => [
  tw`w-64 h-16 text-blue-500 font-semibold`,
]);

const StyledDisplayHistory = styled.div(() => [
  tw`font-light h-8 text-gray-400 text-xs`,
]);

export { StyledDisplay, StyledDisplayResult, StyledDisplayHistory };
