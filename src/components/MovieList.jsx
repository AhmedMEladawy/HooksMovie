import MovieCard from "./MovieCard";
import data from "./MovieData";
import { useState } from "react";
import AddMovie from "./AddMovie";

export default function MovieList() {
  const [movies, setMovies] = useState(data);
  return (
    <>
      <h1>Add Movie</h1>
      <AddMovie movies={movies} setMovies={setMovies} />
      <hr />
      <hr />
      <h1>Movies</h1>
      <div className="Buttonss"> 
      <button
        onClick={() => {
          const sortedMovies = [...movies];
          sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
          setMovies(sortedMovies);
        }}
      >
        filter by title
      </button>
      <button
        onClick={() => {
          const sortedMovies = [...movies];
          sortedMovies.sort((a, b) => b.rating - a.rating);
          setMovies(sortedMovies);
        }}
      >
        filter by rating
      </button>
      <button onClick={() => setMovies(data)}>remove all filters</button>
      </div>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
      
    </>
  );
}
