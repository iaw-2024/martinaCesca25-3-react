import './App.css';
import User from './User.js';

function Table({ datos }) {
  return (
    <div className="App-table">
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Edad</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {
        <User datos={datos}/>
        }
      </tbody>
    </table>
     </div>
  );
}

export default Table;