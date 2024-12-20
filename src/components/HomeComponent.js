import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { fetchMovies } from "../services/api";

const HomeComponent = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Single useEffect to fetch movies on component mount
  useEffect(() => {
    fetchMovies()
      .then((data) => {
        console.log("Fetched movies:", data); // Debug log to check the fetched data
        setMovies(data);
        setFilteredMovies(data); // Initially, all movies are shown
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleFilterChange = (genre) => {
    if (genre === "all") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) => movie.genre === genre);
      setFilteredMovies(filtered);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} />
      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} />
      ) : (
        <p>Loading or no movies available</p> // Display a message if movies are not available
      )}
    </div>
  );
};

export default HomeComponent;