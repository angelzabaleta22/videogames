import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./LeftBar.module.css";
import { sortByGenre } from "../../redux/actions";

function LeftBar() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const currentSelect = useSelector((state) => state.filterGenres);

  const handleSortByGenre = (event) => {
    const genre = event.target.value;
    dispatch(sortByGenre(genre));
  };

  return (
    <div className={css.sidebar}>
      <div className={css.genres}>
        <h2>Filtrar Por Genero</h2>
        <ul>
          <li
            value="-1"
            onClick={(e) => handleSortByGenre(e)}
            className={
              currentSelect === "-1" || currentSelect === "ALL"
                ? css.active
                : undefined
            }
          >
            TODO
          </li>
          {genres ? (
            genres.map((genre) => (
              <li
                key={genre.id}
                value={genre.id}
                onClick={(e) => handleSortByGenre(e)}
                className={currentSelect === genre.id ? css.active : undefined}
              >
                <img src={genre.image_background} alt="" />
                <span>{genre.name}</span>
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
