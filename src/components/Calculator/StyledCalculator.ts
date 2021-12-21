import tw, { styled } from "twin.macro";

const StyledCalculatorBody = styled.div(() => [
  tw`min-h-screen bg-blue-500 flex flex-col justify-center overflow-hidden`,
]);

const StyledCalculatorCard = styled.div(() => [
  tw`p-6 bg-white shadow-xl sm:rounded-lg sm:mx-auto sm:max-w-lg`,
]);

export { StyledCalculatorBody, StyledCalculatorCard };
