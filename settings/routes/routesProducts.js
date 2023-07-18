import express from "express";
import { poolProducts } from "./config/dbConfig.js";

export const RouterProducts = express.Router();


RouterProducts.get("/saludo", (req, res) => {
  res.send("hola mundo");
});
RouterProducts.post("/new_product", (req, res) => {

  poolProducts.getConnection((err,conn)=>{
    if (err) return res.status(500).send('error en el envio')
    
    conn.query("INSERT INTO product SET ?", req.body, (err, result) => {
      if (err) {
        return res.status(500).send({ error: err });
      }

      res.status(200).send({ message: "Usuario creado exitosamente" });
    });
  }
);
});



RouterProducts.get("/", (req, res) => {
  poolProducts.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query("SELECT * FROM products.product", (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Error en el servidor" });
      }

      res.send(result);
    });
  });
});

RouterProducts.put("/product/:id", (req, res) => {
  poolProducts.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query(
      "UPDATE product SET ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        conn.release();

        if (err) {
          return res.status(500).send({ error: "Error en el servidor" });
        }

        res.json({ message: "Actualizado correctamente" });
      }
    );
  });
});

RouterProducts.delete("/product/:id", (req, res) => {
  poolProducts.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query(
      "DELETE FROM product WHERE id = ?",
      [req.params.id],
      (err, result) => {
        conn.release();

        if (err) {
          return res.status(500).send({ error: "Error en el servidor" });
        }

        res.send({ message: "Eliminado" });
      }
    );
  });
});
