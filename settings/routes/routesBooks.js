import express from "express";
import { poolBooks } from "./config/dbConfig.js";

//exportacion de ruta
export const RouterBooks = express.Router();




RouterBooks.get('/books',(req,res)=>{
  res.send('hola desde books')

})

RouterBooks.post("/new_book", (req, res) => {

  poolBooks.getConnection((err,conn)=>{
    if(err) return res.status(200).send(err);

    conn.query('INSERT INTO books SET ?' ,req.body,(err,result)=>{

      if(err) return res.status(200).send(err);

      res.send({message:"creado correctamente"});

    })


  })


});

RouterBooks.get("/", (req, res) => {
  poolBooks.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query("SELECT * FROM books", (err, result) => {
     

      if (err) {
        return res.status(500).send({ error: "Error en el servidor" });
      }

      res.send(result);
    });
  });
});

RouterBooks.put("/book/:id", (req, res) => {
  req.getConnection("books").getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query(
      "UPDATE books SET ? WHERE id = ?",
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

RouterBooks.delete("/book/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      return res.status(500).send({ error: "Error en el servidor" });
    }

    conn.query(
      "DELETE FROM books WHERE id = ?",
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