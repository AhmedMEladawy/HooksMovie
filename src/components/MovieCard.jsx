import { useNavigate } from "react-router-dom"

export default function MovieCard(props) {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`description/${props.id}`)} className="TitleStyle">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.rating}</p>
    </div>
  );
}
