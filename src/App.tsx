import './App.css';
import AnimatedLogo from './Components/AnimatedLogo/AnimatedLogo.component';
import Button from './Components/Button/Button.component';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { themes } from './Theme';


const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${themes.fontFamily}
  }
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <AnimatedLogo src="logo192.png" /><br /><br />
        <Button bootstrapColor='danger'>Click me!</Button><br /><br />
        <Button>Click me!</Button><br /><br />
        <Button>Click me!</Button><br />
      </ThemeProvider>
    </div>
  );
}

export default App;
