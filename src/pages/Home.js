import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api'; // Import your API fetching function
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

const Home = () => {
  const [movies, setMovies] = useState([]); // State to hold the fetched movies
  const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movies
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch movies when the component mounts
  useEffect(() => {
    fetchMovies()
      .then((data) => {
        console.log('Fetched movies:', data); // Log to verify data is being fetched
        setMovies(data);
        setFilteredMovies(data); // Initially, show all movies
        setLoading(false); // Data is loaded, set loading to false
      })
      .catch((error) => {
        console.error('Error fetching movies:', error); // Log any errors that occur
        setLoading(false); // Even if there is an error, stop loading
      });
  }, []);

  // Handler for search functionality
  const handleSearch = (searchTerm) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
    console.log('Filtered movies after search:', filtered);
  };

  // Handler for filter by genre functionality
  const handleFilterChange = (genre) => {
    if (genre === 'all') {
      setFilteredMovies(movies); // Show all movies if 'all' is selected
    } else {
      const filtered = movies.filter((movie) => movie.genre === genre);
      setFilteredMovies(filtered);
    }
    console.log('Filtered movies after genre change:', genre);
  };

  // Log filtered movies when they change (for debugging)
  useEffect(() => {
    console.log('Updated filteredMovies:', filteredMovies);
  }, [filteredMovies]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center mb-4">Discover Movies</h1>
        <SearchBar onSearch={handleSearch} />
        <Filter onFilterChange={handleFilterChange} />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p className="text-center text-gray-400 mt-8">No movies available</p>
      )}
    </div>
  );
};

export default Home;
