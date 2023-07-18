import express from "express";
import { poolUsers } from "./config/dbConfig.js";

export const RouterUsers = express.Router();

RouterUsers.post("/new_user", (req, res) => {
  poolUsers.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query("INSERT INTO user SET ?", req.body, (err, result) => {
      if (err) {
        return res.status(500).send({ error: "Error en el servidor" });
      }

      res.status(200).send({ message: "Usuario creado exitosamente" });
    });
  });
});

RouterUsers.post("/check_user", (req, res, next) => {
  const { name, password, admin, active } = req.body;

  poolUsers.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query(
      "SELECT * FROM user WHERE name = ? AND password = ?",
      [name, password],
      (err, data) => {
        if (err) {
          return res.status(500).send({ error: "Error en el servidor" });
        }

        if (data.length > 0) {
          const user = data[0];

          if (user) {
         
            if (user.admin === 1 && user.name) {
              return res.status(200).send({name:user.name,stado:true});
            } else {
              return res.status(200).send({name:user.name,stado:false});
            }
          }
        } else {
          res.status(400).send({ error: "Usuario no existe" });
        }

        next();
      }
    );
  });
});

RouterUsers.get("/", (req, res) => {
  poolUsers.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query("SELECT * FROM user", (err, data) => {
      if (err) {
        return res.status(500).send({ error: "Error en el servidor" });
      }

      res.status(200).send(data);
    });
  });
});

RouterUsers.put("/user/actualizated/:id", (req, res) => {
  poolUsers.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE user SET ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) return res.send(err);

        res.json({ message: "Actualizado correctamente" });
      }
    );
  });
});

RouterUsers.delete("/user/deleted/:id", (req, res) => {
  const { id } = req.params;
  const userid = id;
  poolUsers.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("DELETE FROM user WHERE id = ?", userid, (err, result) => {
      if (err) return res.send(err);

      res.send({ message: "eliminado correctamente" });
    });
  });
});
