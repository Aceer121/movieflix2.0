import MovieCard from "./MovieCard";

const MovieList = ({ movies = [] }) => {
  // console.log('Rendering MovieList with movies:', movies); // Debug log

  if (movies.length === 0) {
    return <div>No movies available</div>; // Temporary message for debugging
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
