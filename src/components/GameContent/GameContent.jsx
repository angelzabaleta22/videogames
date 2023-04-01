import React, { useState } from "react";
import css from "./GameContent.module.css";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import GameCard from "../GameCard/GameCard";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import GameNotFound from "../GameNotFound/GameNotFound";

export default function GameContent() {
  const loading = useSelector((state) => state.loading);
  const currentVideogames = useSelector((state) => state.filtergames);
  const currentPage = useSelector((state) => state.currentPage);
  const videogamesPerPage = useSelector((state) => state.videogamesPerPage);
  /*  console.log(currentPage); */

  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const videogamesPagination = currentVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const [order, setOrder] = useState("");
  const iamgenNotFound =
    "https://http2.mlstatic.com/D_NQ_NP_2X_714072-MLM50802813957_072022-F.webp";
  return (
    <div className={css.content}>
      <Filter setOrder={setOrder} order={order} />

      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogame={currentVideogames.length}
        currentPage={currentPage}
      />
      <div className={css.cardContent}>
        {loading ? (
          <Loading />
        ) : !videogamesPagination.length ? (
          <GameNotFound />
        ) : (
          videogamesPagination.map((videogame) => (
            <GameCard
              key={videogame.id}
              id={videogame.id}
              name={videogame.name}
              rating={videogame.rating}
              background_image={
                videogame.background_image
                  ? videogame.background_image
                  : iamgenNotFound
              }
              genres={videogame.genres}
            />
          ))
        )}
      </div>
    </div>
  );
}
