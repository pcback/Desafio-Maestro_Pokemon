import React from "react";
import { NavLink } from "react-router-dom";
import Icons from "./Icons";

const Nav = () => {
  return (
    <>
      <div className="cont-navbar">
        <span className="iconos">
          <NavLink to="/icons">
            <Icons />
          </NavLink>
        </span>
        <div className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "linkActivo" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/pokemones"
            className={({ isActive }) => (isActive ? "linkActivo" : undefined)}
          >
            Pokemones
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
