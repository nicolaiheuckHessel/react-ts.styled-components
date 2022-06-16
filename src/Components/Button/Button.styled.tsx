import styled from 'styled-components';
import { ButtonProps } from './Button.props';

const paddingHeight = 10;
const paddingWidth = 18;
const outline = 3;

// const bootstrapEnumToString = (bootstrapColor: String | undefined = "primary", theme: Theme | undefined = undefined): CSSObject => {

// }

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => bootstrapEnumToString(props)};
  border: none;
  color: #fff;
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
  
  &:hover {
    padding: ${paddingHeight * 1.2 - outline}px ${paddingWidth * 1.2 - outline}px;
  }
`

const bootstrapEnumToString = (props: any): any => {
  console.log(props);
  console.log(props.theme);
  
    switch (props.bootstrapColor) {
      case "danger":
        return "#cc0000";
      case "success":
        return "#89de80";
      case "dark":
        return "#181818";
      default:
      case "primary":
        if (props.theme) {
          return props.theme.primary;
        }
        return "#2c7ef6";
    }
}

