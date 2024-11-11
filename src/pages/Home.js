import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api'; // Import your API fetching function
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import HomeComponent from '../components/HomeComponent';

const Home = () => {
  const [movies, setMovies] = useState([]); // State to hold the fetched movies
  const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movies

  // Fetch movies when the component mounts
  useEffect(() => {
    fetchMovies().then(data => {
      console.log('Fetched movies:', data); // Log to verify data is being fetched
      setMovies(data);
      setFilteredMovies(data); // Initially, show all movies
    }).catch(error => {
      console.error('Error fetching movies:', error); // Log any errors that occur
    });
  }, []);

  // Handler for search functionality
  const handleSearch = (searchTerm) => {
    const filtered = movies.filter(movie =>
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
      const filtered = movies.filter(movie => movie.genre === genre);
      setFilteredMovies(filtered);
    }
    console.log('Filtered movies after genre change:', filteredMovies);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} />
      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p>Loading or no movies available</p> // Show a message while loading or if no data is available
      )}
    </div>
  );
};

export default Home;
