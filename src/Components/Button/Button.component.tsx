import { ButtonProps } from './Button.props';
import { OutlineStyledButton, StyledButton } from './Button.styled';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <br /><br />
      <StyledButton>{props.children}</StyledButton><br /><br />
      <StyledButton bootstrapColor='danger'>{props.children}</StyledButton><br /><br />
      <OutlineStyledButton bootstrapColor='danger'>{props.children}</OutlineStyledButton>
    </>
  )
}

export default Button