import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    // Transform data to match component requirements
    return response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      genre: movie.genre_ids[0] || 'Unknown', // Replace with actual genre mapping if needed
      posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Full URL for poster
    }));
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    return [];
  }
};
