import { ButtonProps } from './Button.props';
import { StyledButton } from './Button.styled';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <StyledButton bootstrapColor={props.bootstrapColor}>{props.children}</StyledButton>
    </>
  )
}

export default Button