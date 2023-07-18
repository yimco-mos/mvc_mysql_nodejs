import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./assets/baseComponents/BaseLogin.jsx";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
