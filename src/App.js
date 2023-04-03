import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import LeftBar from "./components/LeftBar/LeftBar";
import GameContent from "./components/GameContent/GameContent";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import {
  getAllVideogames,
  getAllGenres,
  getAllPlatforms,
  setLoading,
} from "./redux/actions";
import GameDetail from "./components/GameDetail/GameDetail";
import CreateVideoGame from "./components/CreateVideoGame/CreateVideoGame";
import PageNotFound from "./components/PageNotFound/PageNotFound";
axios.defaults.baseURL = "https://videogamesbackend-production.up.railway.app";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
    dispatch(setLoading(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <LeftBar />
              <GameContent />
            </>
          }
        />
        <Route
          path="/videogame/:videoGameId"
          element={
            <>
              <Nav />
              <GameDetail />
            </>
          }
        />
        <Route
          exact
          path="/videogame/create"
          element={
            <>
              <Nav />
              <CreateVideoGame />
            </>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
