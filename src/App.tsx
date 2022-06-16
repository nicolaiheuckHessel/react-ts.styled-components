import './App.css';
import AnimatedLogo from './Components/AnimatedLogo/AnimatedLogo.component';
import Button from './Components/Button/Button.component';
import { ThemeProvider } from 'styled-components'
import React from 'react';
import { Theme } from './Theme';


function App() {
  const darkTheme: Theme = {
    primary: "#000",
    text: "#fff"
  }
  const lightTheme: Theme = {
    primary: "#2c7ef6",
    text: "#000"
  }
  const themes = {
    dark: darkTheme,
    light: lightTheme
  }

  return (
    <div className="App">
      <ThemeProvider theme={themes.dark}>
        <AnimatedLogo src="logo192.png" /><br /><br />
        <Button bootstrapColor='danger'>Click me!</Button><br /><br />
        <Button>Click me!</Button><br /><br />
        <Button>Click me!</Button><br />
      </ThemeProvider>
    </div>
  );
}

export default App;
