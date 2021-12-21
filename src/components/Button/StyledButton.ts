import tw, { styled } from "twin.macro";

const StyledButton = styled.button(() => [
  tw`text-xl px-3 py-2 rounded sm:text-2xl sm:py-4 sm:rounded-lg focus:ring-0 focus:ring-offset-0 focus:outline-none`,
]);

export default StyledButton;
