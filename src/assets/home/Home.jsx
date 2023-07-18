import React, { useEffect, useState,useContext } from "react";

import {UserContext} from '../baseComponents/BaseLogin' 
import { ComponentHome} from "./basespublics/ComponentHome";
export const Home = () => {
  const {userAdmin}=useContext(UserContext)

  return (
    <ComponentHome  nameUser={userAdmin}  />
    
  );
};
