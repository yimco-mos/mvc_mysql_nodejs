import { useState, useEffect } from "react";

export const Table = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
  
        
      const url = "http://localhost:9000/users";
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
        
      } catch (error) {
        console.log(error)   }
    };
    fetchData()
  }, []);

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">cargo</th>
            <th scope="col">activo</th>
            <th scope="col">admin</th>
            <th scope="col">opciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.cargo}</td>
              <td>{user.active}</td>
              <td>{user.admin}</td>

              <td>
                <div>
                  <span>
                    <a
                      className="btn btn-warning"
                      href={`/admin/controler_users/edit_user/${user.name}`}
                    >
                      editar
                    </a>{" "}
                  </span>
                  <a className="btn btn-danger" href="/eliminar">
                    eliminar
                  </a>
                  <span></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
