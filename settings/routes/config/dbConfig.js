import mysql  from "mysql";
import dotenv from "dotenv";
dotenv.config();


const dbconfig={


dbOptionsUsers :{
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASEUSERS,
},



dbOptionsProducts: {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASEPRODUCTS,
},


dbOptionsBooks : {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASEBOOKS,
}

};

export const poolUsers = mysql.createPool(dbconfig.dbOptionsUsers);
export const poolProducts = mysql.createPool(dbconfig.dbOptionsProducts);
export const poolBooks = mysql.createPool(dbconfig.dbOptionsBooks);


