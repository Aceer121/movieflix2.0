import React from 'react';

const Filter = ({ onFilterChange }) => {
  const genres = ['all', 'action', 'comedy', 'drama', 'horror', 'romance']; // Example genres

  return (
    <div className="flex justify-center gap-4 mb-4">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onFilterChange(genre)}
          className="px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-blue-500 transition"
        >
          {genre.charAt(0).toUpperCase() + genre.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;
