import {useParams} from "react-router"
import Data from "./MovieData"
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player"
import YouTubePlayer from "react-player/youtube";
import YouTube from "react-youtube";

export default function Description(){
    const params = useParams();
    const navigate = useNavigate();
    const movie = Data.find((movie) => movie.id == params.id);

    return (
        <>
            <button onClick={()=> navigate('/')}>Back</button>
        <div className="DescT">{movie.description}</div>
        <div className="Player"> <ReactPlayer url={movie.trailerLink}/></div>
    </>
    )
}