
export default function MovieCard(props) {
  return (
    <div className="TitleStyle">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.rating}</p>
    </div>
  );
}
