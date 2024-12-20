const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 text-center">
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
