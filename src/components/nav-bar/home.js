import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div className="Body">
        <div className="text-center">
            <h1 className="Buscomics">Buscomics</h1>
        </div>
        <p>El buscador por excelencia de comics</p>
        </div>
        <button className="button1"><Link to='/Busqueda'><h4>Empieza con la busqueda</h4></Link></button>
    </div>
  );
}

export default Home;