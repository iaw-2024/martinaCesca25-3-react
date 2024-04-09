import './App.css';
function User({ datos }) {
  return (
        datos.map((user) => (
          <tr key={user.email}>
            <td>{user.email}</td>
            <td>{user.edad}</td>
            <td>{user.nombre}</td>
          </tr>
        )))}

  
export default User;