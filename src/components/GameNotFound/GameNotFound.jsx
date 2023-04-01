import React from "react";
import css from "./GameNotFound.module.css";

export default function GameNotFound() {
  return (
    <div className={css.center}>
      <span>Not found Game</span>
      <img src="https://i.ibb.co/1ZG6nfk/game-over.png" alt="" />
    </div>
  );
}
