
import { useRef } from "react";
export default function AddMovie({movies, setMovies }) {
    const titleRf= useRef();
    const descRf= useRef();
    const ratingRf= useRef();
    const imageSrcRf = useRef();
    const trailerLinkRf = useRef();

    const handleAddMovie = () => {
        const title = titleRf.current.value
        const description = descRf.current.value
        const rating = ratingRf.current.value
        const image = imageSrcRf.current.value
        const trailerLink = trailerLinkRf.current.value

        const newMovie = {
            id: Math.random() * 1000,
                title,
                description,
                rating,
                image,
                trailerLink,
        };
        titleRf.current.value = "";
        descRf.current.value = "";
        ratingRf.current.value = "";
        imageSrcRf.current.value = "";
        trailerLink.current.value = "";
        setMovies([...movies, newMovie]);
    };
    return (
        <div>
            <span>
            Title: <input type="text" ref={titleRf} />
            Description: <input type="text" ref={descRf} />
            Rating: <input type="number" ref={ratingRf} />
            Image: <input type="text" ref={imageSrcRf} />
            Trailer: <input type="text" ref={trailerLinkRf} />
            <button onClick={handleAddMovie}>Add Movie</button>
            </span>
        </div>
    )
}
