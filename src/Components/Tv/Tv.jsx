import "./Tv.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Tv.css";

export default function Tv(props) {
  let page = props.page;
  let handleNextPage = props.handleNextPage;
  let handlePrevPage = props.handlePrevPage;
  let movies = props.shows;

  return (
    <div className="Tv">
      <div className="movies-pagenation">
        <button onClick={handleNextPage} className="pagenation-btn">
          next
        </button>
        <h1>{page}</h1>
        <button
          onClick={page > 0 ? handlePrevPage : props.setPage(1)}
          className="pagenation-btn"
        >
          Previous
        </button>
      </div>
      <div className="movies-container1">
        {movies &&
          movies[0]?.results?.map((result, i) => (
            <Cards
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
