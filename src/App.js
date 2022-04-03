import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from "./components/nav-bar/home";
import Layout from "./components/layout/layout";
import Register from "./components/nav-bar/register";
import NoMatch404 from "./components/nav-bar/404";
import Login from './components/nav-bar/login';
import Logout from './components/nav-bar/logout';
import Agregar from './components/pages/agregar';
import Tiendas from  "./components/pages/tiendas";
import Busqueda from "./components/pages/busqueda";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch404 />} />
          <Route path="agregar" element={<Agregar />} />
          <Route path="tiendas" element={<Tiendas />} />
          <Route path="busqueda" element={<Busqueda />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
