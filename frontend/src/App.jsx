import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/LOGO.jpg';
import './App.css';

function App() {
  const [foysal, setfoysal] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Foysal + Simcity</h1>
      <div className="card">
        <button onClick={() => setfoysal(foysal => foysal + 1)}>
          foysal is {foysal}
        </button>
        <p>Foysal Ahmed Sorker whatever</p>
      </div>
      <h1>Foysal Ahmed Sorker</h1>
      <span>Full Stack Web Developer(MERN STACK)</span>
    </>
  );
}

export default App;
