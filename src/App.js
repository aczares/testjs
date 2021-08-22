import logo from './logo.svg';
import { useState } from 'react';
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
  const clickHandler = async (num) => {
    const response = await fetch(`http://10.0.0.22?number=${num}`);
    setNum(response.number);
  };
  return (
    <div>
      <h1>The number is currently: {num}</h1>
      <button onClick={() => clickHandler(num)}>Increase</button>
    </div>
  )
};

export default App;
