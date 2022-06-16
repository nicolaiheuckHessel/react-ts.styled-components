import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.color === "danger" ? "#cc0000" : "#1c1b22"};
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
`;
