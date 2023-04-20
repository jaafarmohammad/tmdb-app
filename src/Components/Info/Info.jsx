import { useEffect, useState } from "react";
import "./Info.css";

export default function Info(props) {
  let mediaType = props.mediaType;
  let [movie, setMovie] = useState([]);
  const fetchMovie = async () => {
    if (mediaType === "movie") {
      await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=f8d7d4dd8ad6f6c797f09e6195afce48&language=en-US`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((x) => setMovie([x]));
    } else {
      await fetch(
        `https://api.themoviedb.org/3/tv/${props.id}?api_key=f8d7d4dd8ad6f6c797f09e6195afce48&language=en-US`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((x) => setMovie([x]));
    }
  };

  console.log(movie);

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="Info">
      <div className="top-info">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie[0] && movie[0]?.backdrop_path
          }`}
        />
        <div className="top-info-right">
          <div className="top-info-right-title">
            <h1 className="movie-title">
              {movie[0] && movie[0]?.title ? movie[0]?.title : movie[0]?.name}
            </h1>
            <h1 className="movie-year">{movie[0] && movie[0]?.release_date}</h1>
          </div>
          <div className="genera">{movie[0] && movie[0]?.genres[1].name}</div>
          <div className="overview-title">overview</div>
          <div className="movie-overview">{movie[0] && movie[0]?.overview}</div>
          <div className="score-square">
            <div className="score-title">Score</div>
            <div className="score">{movie[0] && movie[0]?.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
