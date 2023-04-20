import { useState } from "react";
import Cards from "../Cards/Cards";
import "./Search.css";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState("");
  let handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };
  const fetchSearch = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=f8d7d4dd8ad6f6c797f09e6195afce48&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((x) => setSearchTerm([x]));
  };
  console.log(searchTerm);
  return (
    <div className="Search">
      <div className="search-interface">
        <input
          type="text"
          className="search-box"
          placeholder="looking for a movie?"
          onChange={handleSearch}
        ></input>
      </div>
      <button className="search-btn" onClick={fetchSearch}>
        search
      </button>
      <div className="search-items">
        {searchTerm &&
          searchTerm[0]?.results?.map((result, i) => {
            return (
              <Cards
                img={
                  result.backdrop_path
                    ? result.backdrop_path
                    : result.poster_path
                }
                title={result.title ? result.title : result.name}
              />
            );
          })}
      </div>
    </div>
  );
}
