import styled from 'styled-components';
import { ButtonProps } from './Button.props';

const paddingHeight = 10;
const paddingWidth = 18;
const outline = 3;

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bootstrapColor === "danger" ? "#cc0000" : "#1c1b22"};
  border: none;
  color: white;
  padding: ${paddingHeight}px ${paddingWidth}px;
  border-radius: 3px;

  &:hover {
    padding: ${paddingHeight * 1.2}px ${paddingWidth * 1.2}px;
  }
`;

export const OutlineStyledButton = styled(StyledButton)`
  background-color: white;
  color: black;
  padding: ${paddingHeight - outline}px ${paddingWidth - outline}px;
  outline: ${outline}px solid ${(props) => props.bootstrapColor === "danger" ? "#cc0000" : "#1c1b22"};
  
  &:hover {
    padding: ${paddingHeight * 1.2 - outline}px ${paddingWidth * 1.2 - outline}px;
  }
`

