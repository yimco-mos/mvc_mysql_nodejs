
import { useEffect,useState } from "react";
import { BaseForm } from "../baseComponents/baseForm";

export const FormEditUser = () => {
   const [user, setUser] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:9000/users/";
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-5">
      <div>
        <h3 className="md-6 m-4"> </h3>
      </div>

      <BaseForm
        state={user}
        title_form={"editar usuario"} 
        method={"put"}
        apiUrl={`http://localhost:5173/admin/controler_users/edit_user/:${user.name}`}
        setState={setUser}
        route_cancel={"/admin/controler_users"}
        button_acept={"editar"}
        button_cancel={"cancelar"}
        color_cancel={"btn-warning"}
        color_acept={"btn-success"}
      />
    </div>
  );
};
