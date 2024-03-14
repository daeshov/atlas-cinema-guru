import React, { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      const updatedGenres = genres.filter((g) => g !== genre);
      setGenres(updatedGenres);
    } else {
      setGenres([...genres, genre]);
    }
    setSelected(!selected);
  };

  return (
    <li className={`tag ${selected ? 'selected' : ''}`} onClick={handleTag}>
      {genre}
    </li>
  );
};

export default Tag;
