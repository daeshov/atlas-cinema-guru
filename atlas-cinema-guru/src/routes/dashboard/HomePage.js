import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadMovies = async (page) => {
    try {
      const response = await fetch(`/api/titles/advancedsearch?minYear=${minYear}&maxYear=${maxYear}&genres=${genres.join(',')}&title=${title}&sort=${sort}&page=${page}`);
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data]);
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  };

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, title, sort, page, loadMovies]);

  return (
    <div className="dashboard">
      <Filter minYear={minYear} setMinYear={setMinYear} maxYear={maxYear} setMaxYear={setMaxYear} sort={sort} setSort={setSort} genres={genres} setGenres={setGenres} title={title} setTitle={setTitle} />
      
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      <Button text="Load More..." onClick={() => setPage((prevPage) => prevPage + 1)} />
    </div>
  );
};

export default HomePage;
