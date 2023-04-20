import "./Slider.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider(props) {
  let slides = props.slides && props.slides;
  let index = props.index;

  return (
    <Carousel
      className="Slider"
      autoPlay={true}
      showThumbs={false}
      swipeable={true}
      showArrows={false}
      transitionTime={500}
      interval={2000}
      infiniteLoop={true}
    >
      <div>
        <img src={slides[0].img} />
        <p className="legend">{slides[0].title}</p>
      </div>
      <div>
        <img src={slides[1].img} />
        <p className="legend">{slides[1].title}</p>
      </div>
      <div>
        <img src={slides[2].img} />
        <p className="legend">{slides[2].title}</p>
      </div>
    </Carousel>
  );
}

export default Slider;
