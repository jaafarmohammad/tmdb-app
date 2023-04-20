import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Switch } from "react-router-dom";
import Info from "../Info/Info";
import HomeLogic from "../Home/HomeLogic";
import MoviesLogic from "../Movies/MoviesLogic";
import Search from "../Search/Search";
import { useState } from "react";
import Tv from "../Tv/Tv";
import TvLogic from "../Tv/TvLogic";

function App() {
  let [movieId, setMovieId] = useState();
  let [mediaType, setMediaType] = useState("");
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/Info/:id">
            <Info id={movieId} mediaType={mediaType} />
          </Route>
          <Route path="/Movies">
            <MoviesLogic setMovieId={setMovieId} setMediaType={setMediaType} />
          </Route>
          <Route path="/Tv">
            <TvLogic />
          </Route>

          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/">
            <HomeLogic setMovieId={setMovieId} setMediaType={setMediaType} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
