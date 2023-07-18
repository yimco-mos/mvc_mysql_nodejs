import express from "express";
import cors from "cors";

//llamado a rutas---------------->>>>>>
import { RouterBooks } from "./routes/routesBooks.js";
import { RouterProducts } from "./routes/routesProducts.js";
import { RouterUsers } from "./routes/routesUsers.js";
// Configuración de módulos-------------------->>>>>>>>>> 
const app = express();
app.use(express.json());
app.use(cors());

//config cors y permisos
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rutas y configuracion--------->>>
app.use('/users',RouterUsers)
app.use("/books", RouterBooks);
app.use("/prods", RouterProducts);


// Iniciar el servidor
app.set("port", process.env.PORT || 9000);
app.listen(app.get("port"), () => {
  console.log(`El servidor está corriendo en el puerto http://localhost:${app.get("port")}/`);
});
