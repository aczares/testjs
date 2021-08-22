import logo from './logo.svg';
import { useState, useCallback } from 'react';
import './App.css';
import { div } from 'prelude-ls';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const [num, setNum] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const clickHandler = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    const response = await fetch(`http://10.0.0.22?number=${num}`);
    const json = await response.json();
    setNum(json.number);
    setIsSending(false);
  }, [num, isSending]);
  return (
    <div>
      <h1>The number is currently: {num}</h1>
      <button onClick={clickHandler} disabled={isSending}>Increase</button>
    </div>
  )
};

export default App;
