import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam,handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="navbar">
      <h2 className="logo">
        <li style={{ listStyle: "none" }}>
          <NavLink to={"/"}>Food Recipe</NavLink>
        </li>
      </h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e)=>setSearchParam(e.target.value)}
          placeholder="Enter items..."
          className="search-input"
        ></input>
      </form>
      <ul className="nav-links">
        <li>
          <NavLink to={"/"} className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favorites"} className="nav-link">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
