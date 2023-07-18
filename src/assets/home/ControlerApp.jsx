import { useContext, useEffect } from "react";
import { UserContext } from "../baseComponents/BaseLogin";

export const ControlerApp = () => {
  const { userCheck,stado } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href={userCheck ? "/" : "/"}>
            AddminManager
          </a>

          {userCheck && (
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown bg-light">
               {stado && <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  opciones Admin
                </a>}

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/admin/controler_Products"
                    >
                      controlador productos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/admin/controler_users">
                      controlador usuarios
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      configuración admin
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/products"
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/user/:user">
                  user
                </a>
              </li>

              <li
                className="nav-item"
                onClick={() => {
                  sessionStorage.clear()
                  window.location.reload();
                }}
              >
                <a className="nav-link active" href="/" aria-disabled="true">
                  cerrar sesión
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
