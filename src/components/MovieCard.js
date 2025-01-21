const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 text-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
    <img
      src={movie.posterUrl}
      alt={movie.title}
      className="rounded-lg shadow-lg"
    />
    <p className="text-white font-semibold mt-2">{movie.title}</p>
  </div>  
  );
};

export default MovieCard;
