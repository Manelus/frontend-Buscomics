import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './busqueda.css';
import axios from "axios";
import { Link } from "react-router-dom"

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
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
        <input onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
        }}
        placeholder="Busca tu comic"
        className="stilo"
        type="text"
        />
      <button onClick={searchBtn} className={"btn btn-primary fs-5"}>
        Buscar
      </button>
        </form>
    </div>
  );
}

export default Search;