import "./Slider.css";
import { useState } from "react";
import Slider from "./Slider";

function SliderLogic(props) {
  let [index, setIndex] = useState(0);
  let sliderHandler = ({ target }) => {
    setIndex(target.value);
    console.log(index);
  };

  let slides = props.slides;
  return (
    <div className="sliderLogic">
      <Slider slides={slides} sliderHandler={sliderHandler} index={index} />
    </div>
  );
}

export default SliderLogic;
