import {
  useContext,
  useState,
  createContext,
  useEffect,
  useCallback,
} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userCheck, setUserCheck] = useState(false);
  const [userAdmin, setAdmin] = useState();
  const [stado, setStado] = useState(false);

  useEffect(() => {
    const sesion = sessionStorage.getItem("sesion");
    const user = sessionStorage.getItem("user");
    const userstado = sessionStorage.getItem("userStado");
    if (sesion) {
      if (sesion == "tokensesion") {
        setUserCheck(true);
        setAdmin(user)

      } else {
        setUserCheck(false);
      }

      if (userstado === "false") {
        setStado(false);
      } else {
        setStado(true);
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userCheck,
        setUserCheck,
        userAdmin,
        setAdmin,
        stado,
        setStado,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

//necesito hacer una funcion que cuando haga
//inicio de sesion guarde el estado de admin para
//controlador de usuarios

export const BaseLogin = () => {
  const { userAdmin, setAdmin } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handlechange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:9000/users/check_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();

      console.log(data.name);
      sessionStorage.setItem("sesion", "tokensesion");
      sessionStorage.setItem('user', data.name);
      sessionStorage.setItem("userStado", data.stado);

      window.location.href = "/";
    }
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={user.name}
            type="email"
            className="form-control"
            name="name"
            placeholder="abc@mail.com"
            onChange={handlechange}
          />
          <small id="emailHelpId" className="form-text text-muted">
            Help text
          </small>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={user.password}
            type="password"
            className="form-control "
            name="password"
            placeholder="escriba su contraseña"
            onChange={handlechange}
          />
          <small id="emailHelpId" className="form-text text-muted">
            Help text
          </small>
        </div>

        <div>
          <button className="btn btn-success " onClick={handlesubmit}>
            ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
