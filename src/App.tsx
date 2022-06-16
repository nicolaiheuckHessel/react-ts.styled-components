import './App.css';
import AnimatedLogo from './Components/AnimatedLogo/AnimatedLogo.component';
import Button from './Components/Button/Button.component';

function App() {
  return (
    <div className="App">
      {/* <img src="logo192.png" alt='logo' className='App-logo'></img> */}
      <AnimatedLogo src="logo192.png" />
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
