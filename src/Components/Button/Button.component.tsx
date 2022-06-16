import { ButtonProps } from './Button.props';
import { StyledButton } from './Button.styled';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <StyledButton>{props.children}</StyledButton>
      <StyledButton color='danger'>{props.children}</StyledButton>
    </>
  )
}

export default Button