import { ControlerApp } from "./assets/home/ControlerApp";
import { Login } from "./assets/home/Login";
import { RoutesUsers } from "./RoutesUsers";
import { Route, Routes } from "react-router-dom";
//componentes de reenderiado

import { UserContext } from "./assets/baseComponents/BaseLogin";
import "./App.css";
import { useContext } from "react";

export const App = () => {
  const { userCheck} = useContext(UserContext);

  return (
    <>
    <ControlerApp />
      {userCheck ? (
        <RoutesUsers />
      ) : (
        
        <Routes>
         <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
};
