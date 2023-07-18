import { useState, useEffect } from "react";
import { fetchdata } from "../funtionsGlobals/funtionsGlobals";
import React from "react";

export const BaseProducts = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:9000/prods';
      const data = await fetchdata(url);
  
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="table-responsive">
      <table
        className="table table-striped
      table-hover	
      table-borderless
      table-primary
      align-middle"
      >
        <thead className="table-light">
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map(product=>{

            return(
              <tr className="table-primary">
              <td scope="row" >{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>

            )

          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};
