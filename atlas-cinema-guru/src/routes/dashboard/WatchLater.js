import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const response = await fetch('/api/titles/watchlater/');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error loading watch later movies:', error);
      }
    };

    fetchWatchLater();
  }, []);

  return (
    <div className="dashboard">
      <h1>Movies to watch later</h1>
      
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default WatchLater;
