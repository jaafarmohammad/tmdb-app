import { useEffect, useState } from "react";
import Tv from "./Tv";
import "./Tv.css";

export default function TvLogic() {
  let [shows, setShows] = useState([]);
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
      `
      https://api.themoviedb.org/3/discover/tv?api_key=f8d7d4dd8ad6f6c797f09e6195afce48&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((x) => setShows([x]));
    console.log(shows);
  };

  return (
    <div className="TvLogic">
      <Tv
        shows={shows}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
