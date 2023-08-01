
import { useRef } from "react";
export default function AddMovie({movies, setMovies }) {
    const titleRf= useRef();
    const descRf= useRef();
    const ratingRf= useRef();
    const imageSrcRf = useRef();

    const handleAddMovie = () => {
        const title = titleRf.current.value
        const description = descRf.current.value
        const rating = ratingRf.current.value
        const image = imageSrcRf.current.value

        const newMovie = {
            id: Math.random() * 1000,
                title,
                description,
                rating,
                image,
        };
        titleRf.current.value = "";
        descRf.current.value = "";
        ratingRf.current.value = "";
        imageSrcRf.current.value = "";
        setMovies([...movies, newMovie]);
    };
    return (
        <div>
            <span>
            Title: <input type="text" ref={titleRf} />
            Description: <input type="text" ref={descRf} />
            Rating: <input type="number" ref={ratingRf} />
            Image: <input type="text" ref={imageSrcRf} />
            <button onClick={handleAddMovie}>Add Movie</button>
            </span>
        </div>
    )
}
