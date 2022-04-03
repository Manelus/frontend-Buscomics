import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './busqueda.css';
import Auth from '../services/auth'


function Search(props) {

  const [comics, setComics] = useState([]);
  const [nombre, setNombre] = useState();

  const handleChange = (e) => {
    setNombre(e.target.value)
  }

  const searchBtn = async (e) => {
    e.preventDefault();
    const comics = await Auth.busqueda(nombre)
    setComics(comics.data.resultado)
  };



  return (
    <div>
      <div className="Body">
        <div className="text-center">
          <h1 className="Buscomics">Buscomics</h1>
        </div>
        <p>El buscador por excelencia de comics</p>
      </div>
      <form className={"d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5"}>
        <input value={nombre} onChange={handleChange}
          placeholder="Busca tu comic"
          className="stilo"
          type="text"
        />
        <button onClick={searchBtn} className={"btn btn-primary fs-5"}>
          Buscar
        </button>
      </form>
      <table class="table table-dark ">
        <thead>
          <tr>
            <th scope="col">nombre:</th>
            <th scope="col">precio:</th>
            <th scope="col">autor:</th>
            <th scope="col">personaje:</th>
            <th scope="col">imagen:</th>
            <th scope="col">nombre tienda:</th>
            <th scope="col">enlace:</th>
          </tr>
        </thead>

        <tbody>
          {comics && (
             comics.map(comic => (
              <tr>
                <td>{comic.nombre}</td>
                <td>{comic.precio}</td>
                <td>{comic.autor}</td>
                <td>{comic.personaje}</td>
                <td><a href={comic.imagen}>enlace</a></td>
                <td>{comic.nombre_tienda}</td>
                <td><a href={comic.enlace}>enlace</a></td>
              </tr>
            ))
          )}


        </tbody>
      </table>
    </div>
  );
}


export default Search;