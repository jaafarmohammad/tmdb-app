import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SliderLogic from "../Slider/SliderLogic";
import Home from "./Home";
import Loader from "../Loader/Loader";

export default function HomeLogic(props) {
  let [res, setRes] = useState([]);
  useEffect(() => {
    fetchTrending();
  }, []);

  /*src=`https://image.tmdb.org/t/p/original/${res[0][0].backdrop_path}`*/

  const fetchTrending = async () => {
    await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=f8d7d4dd8ad6f6c797f09e6195afce48",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((x) => setRes([x]));
    console.log(res);
  };

  let slides =
    res &&
    res[0]?.results.map((result, i) => {
      return {
        img: `https://image.tmdb.org/t/p/original/${result.backdrop_path}`,
        title: result.title,
        name: result.name,
        overview: result.overview,
      };
    });

  return (
    <div className="home-logic">
      res &&{" "}
      <Home
        slides={slides}
        res={res}
        setMovieId={props.setMovieId}
        setMediaType={props.setMediaType}
      />
    </div>
  );
}
