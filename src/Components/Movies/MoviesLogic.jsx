import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Movies from "./Movies";
import "./Movies.css";

export default function MoviesLogic(props) {
  let [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1);
  useEffect(() => {
    fetchMovies();
  }, [page]);

  let handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  let handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };
  const fetchMovies = async () => {
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f8d7d4dd8ad6f6c797f09e6195afce48&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((x) => setMovies([x]));
  };
  console.log(movies);

  return (
    <div className="MoviesLogic">
      <Movies
        movies={movies}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        page={page}
        setPage={setPage}
        setMovieId={props.setMovieId}
        setMediaType={props.setMediaType}
      />
    </div>
  );
}
