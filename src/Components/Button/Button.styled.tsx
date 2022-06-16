import styled from 'styled-components';
import { ButtonProps } from './Button.props';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.color === "danger" ? "#cc0000" : "#1c1b22"};
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
`;
