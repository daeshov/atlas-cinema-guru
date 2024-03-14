import React from 'react';
import './movies.css';
import SearchBar from '../general/SearchBar';
import Tag from './Tag';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
  const sortingOptions = ['latest', 'oldest', 'highestrated', 'lowestrated'];

  return (
    <div className="filter">
      <SearchBar title={title} setTitle={setTitle} />

      <div className="input-group">
        <label>Min Year:</label>
        <input type="number" value={minYear} onChange={(e) => setMinYear(Number(e.target.value))} />
      </div>

      <div className="input-group">
        <label>Max Year:</label>
        <input type="number" value={maxYear} onChange={(e) => setMaxYear(Number(e.target.value))} />
      </div>

      <div className="input-group">
        <label>Sort By:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          {sortingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="tags">
        {['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'].map((genre) => (
          <Tag key={genre} genre={genre} filter={genres.includes(genre)} genres={genres} setGenres={setGenres} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
