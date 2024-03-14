import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    // Simulate API calls to check if movie is in favorites/watch later
    const fetchFavorites = async () => {
      // Your API call for favorites
      // Set setIsFavorite based on the API response
    };

    const fetchWatchLater = async () => {
      // Your API call for watch later
      // Set setIsWatchLater based on the API response
    };

    fetchFavorites();
    fetchWatchLater();
  }, [movie]); // Ensure useEffect runs when the movie prop changes

  const handleClick = (type) => {
    // Simulate API calls to add/remove from favorites/watch later
    const updateFavorites = async () => {
      // Your API call to update favorites
      // Set setIsFavorite based on the API response
    };

    const updateWatchLater = async () => {
      // Your API call to update watch later
      // Set setIsWatchLater based on the API response
    };

    if (type === 'favorite') {
      setIsFavorite(!isFavorite);
      updateFavorites();
    } else if (type === 'watchlater') {
      setIsWatchLater(!isWatchLater);
      updateWatchLater();
    }
  };

  return (
    <li className="movie-card">
      <FontAwesomeIcon icon={faHeart} className={`icon ${isFavorite ? 'active' : ''}`} onClick={() => handleClick('favorite')} />
      <FontAwesomeIcon icon={faClock} className={`icon ${isWatchLater ? 'active' : ''}`} onClick={() => handleClick('watchlater')} />

      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.synopsis}</p>
        <div className="genres">{movie.genres.join(', ')}</div>
      </div>
    </li>
  );
};

export default MovieCard;
