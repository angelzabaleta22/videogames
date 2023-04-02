import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SORT_BY_SOURCE = "SORT_BY_SOURCE";
export const SORT_BY_GENRE = "SORT_BY_GENRE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const SEARCH_GAME = "SEARCH_GAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const SET_LOADING = "SET_LOADING";
export const RESET_VIDEOGAME = "RESET_VIDEOGAME";

export const getAllVideogames = () => {
  return async function (dispatch) {
    try {
      const result = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageNumber,
  };
};

export const sortBySource = (source) => {
  return {
    type: SORT_BY_SOURCE,
    payload: source,
  };
};

export const sortByGenre = (genre) => {
  return {
    type: SORT_BY_GENRE,
    payload: genre,
  };
};

export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};

export const searchGame = (search) => {
  return async function (dispatch) {
    try {
      const result = await axios.get(`/videogames?name=${search}`);

      return dispatch({
        type: SEARCH_GAME,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderByRating = (rating) => {
  return {
    type: ORDER_BY_RATING,
    payload: rating,
  };
};

export const getVideogame = (videoGameId) => {
  return async function (dispatch) {
    const result = await axios.get(`/videogame/${videoGameId}`);

    if (result.data.success) {
      return dispatch({
        type: GET_VIDEOGAME,
        payload: [],
      });
    } else {
      return dispatch({
        type: GET_VIDEOGAME,
        payload: result.data,
      });
    }
  };
};

export const getAllGenres = () => {
  return async function (dispatch) {
    try {
      const result = await axios.get("/genres");
      return dispatch({
        type: GET_ALL_GENRES,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllPlatforms = () => {
  return async function (dispatch) {
    try {
      const result = await axios.get("/platforms");
      return dispatch({
        type: GET_ALL_PLATFORMS,
        payload: result.data,
      });
    } catch (error) {}
  };
};

export const createVideoGame = (videogame) => {
  return async function () {
    const result = await axios.post("/videogame", videogame);
    return result;
  };
};

export const resetVideogame = () => {
  return {
    type: RESET_VIDEOGAME,
  };
};

export const deleteVideoGame = (videoGameId) => {
  return async function () {
    const result = await axios.delete(`/videogame/${videoGameId}`);
    return result;
  };
};
