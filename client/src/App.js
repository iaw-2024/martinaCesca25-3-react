import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import { useState, useEffect } from 'react';

function App() {
  const [datos, setDatos] = useState([{}]);
  useEffect(() => {
    fetch('http://localhost:3001/datos')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Listado de emails</h1>
      </header>
      <Table datos={datos}/>
    </div>
  )

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;