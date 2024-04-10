
import './App.css';
import Table from './Table.js';
import { useState, useEffect } from 'react';

function App() {
  const [datos, setDatos] = useState([{}]);
  useEffect(() => {
    fetch('/datos')
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
}

export default App;
