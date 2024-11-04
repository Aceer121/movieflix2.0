import MovieCard from './MovieCard';

const MovieList = ({ movies =[] }) => {
  if (movies.length === 0) {
    return <div>No movies available</div>; // Temporary message for debugging
  }

  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

console.log(movies); // Check if movies has the expected structure and properties


export default MovieList;
