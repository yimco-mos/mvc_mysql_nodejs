import { useState } from "react";
import { BaseForm } from "../baseComponents/baseForm";

export const FormNewUser = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    cargo: "",
    active: true,
    admin:false,
  });
  


  return (
    <div className="p-5">
      <div>
        <h3 className="md-6 m-4">crear nuevo usuario </h3>
      </div>
      
      <BaseForm
        apiurl={ "http://localhost:9000/users/new_user"}
        method="POST"
        title_form={" desde el administrador"}
        state={user}
        setState={setUser}
        button_acept={"crear"}
        button_cancel={"cancelar"}
        color_cancel={"btn-warning"}
        color_acept={"btn-success"}
        route_after_form={"/admin/controler_users"}
      />
    </div>
  );
};