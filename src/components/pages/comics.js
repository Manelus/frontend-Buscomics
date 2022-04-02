import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from '../services/auth'
import './busqueda.css';

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {comics: Auth.busqueda()}
  }
    
   searchBtn = (e) => {
    e.preventDefault();
  };



  render (){ 
    return (
    <div>
        <div className="Body">
        <div className="text-center">
            <h1 className="Buscomics">Buscomics</h1>
        </div>
        <p>El buscador por excelencia de comics</p>
        </div>
        <form className={"d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5"}>
        </form>
      <ul className="mt-4 p-0">
        {this.comics.map(comic => (
          <div>
            <li>nombre:</li>
            <li>precio:</li>
            <li>autor:</li>
            <li>personaje:</li>
            <li>imagen:</li>
            <li>nombre_tienda:</li>
            <li>enlace:</li>
          </div>
        ))}
      </ul>
    </div>
  
  )}
}

export default Search;
