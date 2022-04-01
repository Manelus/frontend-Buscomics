import { NavLink} from "react-router-dom";

function Tienda() {
  let activeClassName = "underline"
  let liClassName = "nav-item";
  let navLink = "nav-link";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/tiendas">Tienda</NavLink>
            </li> 
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/agregar">Agregar comics</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/logout">logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Tienda;