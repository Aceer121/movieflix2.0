const MovieCard = ({ movie }) => {
// Check if movie exists and has posterUrl, title, and genre properties
   if (!movie || !movie.posterUrl || !movie.title || !movie.genre) {
    return null; // Return nothing if any required property is missing
  }
  
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};
export default MovieCard;
