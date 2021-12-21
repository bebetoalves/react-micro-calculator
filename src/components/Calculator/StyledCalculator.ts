import tw, { styled } from "twin.macro";

const StyledCalculatorBody = styled.div(() => [
  tw`min-h-screen bg-blue-500 flex flex-col justify-center overflow-hidden`,
]);

const StyledCalculatorCard = styled.div(() => [
  tw`p-6 bg-white shadow-xl sm:rounded-lg sm:mx-auto sm:max-w-lg`,
]);

export const StyledCalculatorCardTitle = styled.h5(() => [
  tw`text-center font-light text-lg text-gray-500`,
]);

export const StyledCalculatorCardSeparator = styled.hr(() => [
  tw`border-gray-100`,
]);

export { StyledCalculatorBody, StyledCalculatorCard };
