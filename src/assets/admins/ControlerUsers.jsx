import {Table} from '../componentsadmin/Table'
import {UserContext} from '../baseComponents/BaseLogin' 
import { useContext } from 'react';




export const ControlerUsers = () => {
  const {userAdmin}= useContext(UserContext)
  return (
    <div>
      <div className="mb-4 m-4 p-6">
        <h3>configuraciones de usuarios</h3>
      </div>
      

      <h4> hola, {userAdmin}</h4>

      <div className="mb-6 m-4 p-4">
   <a href="/admin/controler_users/new_user"   className="btn btn-success" >
          crear usuario
        </a>
      </div>
      

      <div className="mb-6 m-4 p-2">
      
        <Table />

     
      </div>
    </div>
  );
};
