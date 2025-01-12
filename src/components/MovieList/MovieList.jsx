import React from 'react'
import s from "./MovieList.module.css";
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({trendsMovie}) => {
  const location = useLocation();
  
  return (
    <ul className={s.movieList}>
    {trendsMovie.map(({ id, original_title }) => <li key={id}>
      <Link to={id.toString()} state={location}>{original_title}</Link>
      </li>)}
    </ul>
  )};

export default MovieList;
