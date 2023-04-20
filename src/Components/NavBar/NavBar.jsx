import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  let logo = require("../../Assets/Animate2.png");
  let homeIcon = require("../../Assets/Home.png");
  let animeIcon = require("../../Assets/TV.png");
  let moviesIcon = require("../../Assets/Movie.png");
  let searchIcon = require("../../Assets/Search.png");

  return (
    <div className="NavBar">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <NavLink to="/Home">
        <img src={homeIcon} className="navIcons" />
      </NavLink>
      <NavLink to="/Tv">
        <img src={animeIcon} className="navIcons" />
      </NavLink>

      <NavLink to="/Movies">
        <img src={moviesIcon} className="navIcons" />
      </NavLink>
      <NavLink to="/Search">
        <img src={searchIcon} className="navIcons" />
      </NavLink>
    </div>
  );
}
