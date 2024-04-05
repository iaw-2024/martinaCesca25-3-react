import './App.css';
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
        {datos.map((user) => (
          <tr key={user.email}>
            <td>{user.email}</td>
            <td>{user.edad}</td>
            <td>{user.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
     </div>
  );
}

/*function Table({datos}){
  return (
        <div className="App-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>

            {datos.map((person,index) => (
                <tr key={index}>
                  <td>{person.nombre}</td>
                  <td>{person.edad}</td>
                  <td>{person.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
}*/
export default Table;