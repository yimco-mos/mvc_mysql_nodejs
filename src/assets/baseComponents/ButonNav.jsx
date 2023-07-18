import React from 'react'
import {BaseHome} from './BaseHome'
export const ButonNav = () => {
  return (
    <div>

<button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#Id1" aria-controls="Id1">menu movil</button>
    
    <div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="Id1" aria-labelledby="Enable both scrolling & backdrop" >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="Enable both scrolling & backdrop">¿qué deseas buscar?</h5> 
      
      <div>
 <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
        

      </div>
      
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
    <nav className="nav justify-content-center d-block m-8 p-9 ">

      

<div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        
       
          <div className="" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
            <BaseHome menu_prin={"menu conmidas"} menu_sec={'hamburguesas'} menu_tri={'salchipapas'} menu_cuar={'picadas'} classbs5={'link-warning dropdown-toggle'} />
            <BaseHome menu_prin={"menu bebidas"} classbs5={'link-warning dropdown-toggle'} menu_sec={'gaseosas'} menu_tri={'jugos'} menu_cuar={'micheladas y cocteles'} />

            <li>
          
          
          <a className="link-danger" >
                       controler user
                      </a>
          </li>
            </ul>
          </div>
        </div>
      </div>
      
    </nav>


      </div>
    </div>



    

    </div>)
}
