import React from "react";

export const BaseHome = ({
  menu_prin,
  menu_sec,
  classbs5,
  menu_tri,
  menu_cuar,
  Href1,
  Href2,
  Href3,
  Href4,
}) => {
  //items  que van dentro del boton de busqueda para usuario
  return (
    <li className="nav-item dropdown">
      <a
        className={classbs5}
        href={Href1}
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
      >
        {menu_prin}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" href={Href2}>
            {menu_sec}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href={Href3}>
            {menu_tri}
          </a>
        </li>
        <li></li>
        <li>
          <a className="dropdown-item" href={Href4}>
            {menu_cuar}
          </a>
        </li>
      </ul>
    </li>
  );
};
