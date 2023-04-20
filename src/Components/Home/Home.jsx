import "./Home.css";
import React from "react";

import SliderLogic from "../Slider/SliderLogic";
import Loader from "../Loader/Loader";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

export default function Home(props) {
  let res = props.res;
  let setMediaType = props.setMediaType;
  let setMovieId = props.setMovieId;

  console.log(res);
  return (
    <div className="Home">
      {props.slides && <SliderLogic slides={props.slides} />}

      <h1 className="trending-header">trending </h1>
      <div className="cards-container">
        {res &&
          res[0]?.results.map((result, i) => (
            <Link
              to={`/Info/${result.id}`}
              onClick={() => {
                setMovieId(result.id);
                setMediaType(result.media_type);
              }}
            >
              <Cards
                title={result.title ? result.title : result.name}
                img={result.backdrop_path}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
