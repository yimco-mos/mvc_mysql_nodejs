import { Routes, Route } from "react-router-dom";

//componentes de reenderiado
import { Home } from "./assets/home/Home";
import { ControlerUsers } from "./assets/admins/ControlerUsers";
import { FormNewUser } from "./assets/componentsadmin/FormNewUser";
import { FormEditUser } from "./assets/componentsadmin/FormEditUser";
import { BaseProducts } from "./assets/baseComponents/BaseProducts";
import { useContext } from "react";
import { UserContext } from "./assets/baseComponents/BaseLogin";

export const RoutesUsers = () => {

    const {userCheck,userAdmin} =useContext(UserContext)

    return (
    <div>
      <Routes>
      
      
        <Route path={"/"} element={<Home />} />

        <Route path="/admin/controler_users" element={<ControlerUsers />} />

        <Route
          path="/admin/controler_users/new_user"
          element={<FormNewUser />}
        />

        <Route
          path="/admin/controler_users/edit_user/:name"
          element={<FormEditUser />}
        />
        <Route path="/products" element={<BaseProducts />} />
    
    
    
      </Routes>
    </div>
  );
};
