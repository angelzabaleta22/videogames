import React from "react";
import { Link } from "react-router-dom";
import css from "./Landing.module.css";

function Landing() {
  return (
    <div className={css.content}>
      <div>
        <img src="https://i.ibb.co/bdtB59B/ASASI1.png" alt="" />
      </div>
      <div>
        <h1 className={css.titulo}>El Mejor Sitio Web Para Descubrir Videojuegos</h1>
        <Link to="/home" className={css.button}>
          Ingresar
        </Link>
      </div>
    </div>
  );
}

export default Landing;
