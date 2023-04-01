import React from "react";
import css from "./Pagination.module.css";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

function Pagination({ videogamesPerPage, totalVideogame, currentPage }) {
  const dispatch = useDispatch();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideogame / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      {pageNumbers.length ? (
        <nav className={css.pagination}>
          <ul>
            <li
              className={currentPage === 1 ? css.disabled : undefined}
              onClick={() => handleClick(currentPage - 1)}
            >
              <span>Prev</span>
            </li>

            {pageNumbers?.map((number) => (
              <li
                key={number}
                className={currentPage === number ? css.currentPage : undefined}
                onClick={() => handleClick(number)}
              >
                <span>{number}</span>
              </li>
            ))}

            <li
              className={pageNumbers.length === currentPage ? css.disabled : ""}
              onClick={() => handleClick(currentPage + 1)}
            >
              <span>Next</span>
            </li>
          </ul>
        </nav>
      ) : undefined}
    </>
  );
}

export default Pagination;
