import React from "react";
import { Link } from "react-router-dom";
import css from "./Nav.module.css";

function Nav() {
  return (
    <header className={css.header}>
      <div className={css.content}>
        <div className={css.title}>
          <h1>AZ-GAMES</h1>
          <img
            src="https://i.ibb.co/zNhjkn2/iconopeuqe-o-AZ.png"
            alt="Not found"
          ></img>
        </div>
        <nav>
          <ul>
            <Link to="/home" className={css.button}>
              Inicio
            </Link>

            <Link to="/videogame/create" className={css.button}>
              Crear Videojuego
            </Link>

            <Link to="/" className={css.button}>
              Salir
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
