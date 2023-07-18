import { useState } from "react";

export const BaseForm = ({
  button_acept,
  button_cancel,
  color_acept,
  color_cancel,
  route_cancel,
  route_after_form,
  title_form,
  //configs para backend
  apiurl,
  state,
  setState,
  method,
}) => {
  const [colorChecked, setColorChecked] = useState(false);

  const handleCheckedView = () => {
    setColorChecked(!colorChecked);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const userMap = () => {
    if (state.name === "") {
      const newName = "user" + Math.floor(+Math.random() * 100);
      state.name = newName;
    }

    if (state.password === "" || state.cargo === "") {
      throw new Error("Los campos de contraseña y cargo son obligatorios.");
    }

    if (state.active) {
      state.active = state.active === 0 ? false : true;
    }
  };

  const HandleSubmmit = async () => {
    userMap();

    const apiurls = apiurl;
    try {
      const response = await fetch(apiurls, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        // Registro exitoso
        // Realizar acciones adicionales, como redireccionar a otra página o mostrar contenido adicional
        setState({
          name: "",
          password: "",
          cargo: "",
          admin: false,
          active: true,
        });  
          window.location.href = route_after_form;
    
      } else {
        // Error en el registro
        console.error("error");
        // Mostrar mensaje de error o realizar acciones adicionales
      }
    } catch (error) {
      console.error("Error en la solicitud", error);
      // Realizar acciones en caso de error de conexión o solicitud
    }
  };

  const welcome = () => {};

  return (
    <div>
      
      {console.log(state.admin,'desde baseform')}

  
  
      <form onSubmit={HandleSubmmit}>
        <h3>{title_form}</h3>
        <div className="mb-3">
          <label className="form-label">nombre</label>
          <input
            type="text"
            className="form-control"
            value={state.name}
            onChange={handleChange}
            name="name"
            placeholder="ingrese un usuario"
          />
          <small id="emailHelpId" className="form-text text-muted">
            escribe bien
          </small>
        </div>{" "}
        <div className="mb-3">
          <label className="form-label">cargo</label>
          <input
            type="text"
            className="form-control"
            value={state.cargo}
            onChange={handleChange}
            name="cargo"
            placeholder="ingrese un rol"
          />
          <small id="emailHelpId" className="form-text text-muted">
            escribe bien
          </small>
        </div>
        <div className="mb-3">
          <label className="form-label">contraseña</label>
          <div className="checkView d-flex">
            <input
              type={colorChecked ? "text" : "password"}
              className="md-3 form-control"
              name="password"
              onChange={handleChange}
              value={state.password}
              placeholder="ingrese una contraseña"
            />

            <div
              style={{
                background: colorChecked && "#fb0a0ab9",
                border: colorChecked ? "1px solid #000" : "1px solid #fb0a0ab9",
              }}
              className="circleCheck"
              onClick={handleCheckedView}
            ></div>
          </div>
          <small id="emailHelpId" className="form-text text-muted">
            Help text
          </small>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="admin"
              value={state.admin}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="admin">
              Admin
            </label>
          </div>
          <small id="emailHelpId" className="form-text text-muted">
            escribe bien
          </small>
        </div>
        <p>error</p>
        <div className="mb-6 p-4 d-flex">
          <div className="m-6 p-4">
            <button type="submit">
              <a  className={`btn  ${color_acept}`}>{button_acept}</a>
            </button>
          </div>
          <div className="m-6 p-4">
            <a href={route_after_form} className={`btn ${color_cancel}`}>
              {button_cancel}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
