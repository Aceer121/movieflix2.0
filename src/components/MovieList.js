import MovieCard from "./MovieCard";
console.log("Rendering MovieList with movies:");

const MovieList = ({ movies = [] }) => {
  // console.log('Rendering MovieList with movies:', movies); // Debug log

  if (movies.length === 0) {
    return <div>No movies available</div>; // Temporary message for debugging
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;