import "./Cards.css";

export default function Cards(props) {
  let img = props.img;

  return (
    <div
      className="Cards"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="card-title">{props.title}</h1>
    </div>
  );
}
