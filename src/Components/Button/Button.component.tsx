import { ButtonProps } from './Button.props';
import { StyledButton } from './Button.styled';

const Button = (props: ButtonProps) => {
  return (
    <>
      <StyledButton>{props.children}</StyledButton>
      <StyledButton color='danger'>{props.children}</StyledButton>
    </>
  )
}

export default Button