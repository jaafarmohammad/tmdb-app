import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import "./Movies.css";

export default function Movies(props) {
  let setMediaType = props.setMediaType;
  let setMovieId = props.setMovieId;
  let page = props.page;
  let handleNextPage = props.handleNextPage;
  let handlePrevPage = props.handlePrevPage;
  let movies = props.movies;

  return (
    <div className="Movies">
      <div className="movies-pagenation">
        <button onClick={handleNextPage} className="pagenation-btn">
          next
        </button>
        <h1>{page}</h1>
        <button
          onClick={page > 1 ? handlePrevPage : props.setPage(1)}
          className="pagenation-btn"
        >
          Previous
        </button>
      </div>
      <div className="movies-container1">
        {movies &&
          movies[0]?.results.map((result, i) => (
            <Cards
              key={result.id}
              title={result.title ? result.title : result.name}
              img={
                result.backdrop_path ? result.backdrop_path : result.poster_path
              }
            />
          ))}
      </div>
    </div>
  );
}
