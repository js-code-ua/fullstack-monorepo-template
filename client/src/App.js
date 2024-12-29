import { useState, useEffect } from 'react';
import { getHelloMessage } from './api';
import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    getHelloMessage().then(setMsg);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
