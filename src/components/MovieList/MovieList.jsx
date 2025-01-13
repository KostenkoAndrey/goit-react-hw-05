import React from 'react'
import s from "./MovieList.module.css";
import { Link, useLocation, useParams } from 'react-router-dom';

const MovieList = ({ movieFetch }) => {
const location = useLocation();
  
  return (
    <ul className={s.movieList}>
    {movieFetch.map(({ id, original_title }) => <li key={id}>
      <Link to={`/movies/${id}`} state={location}>{original_title}</Link>
      </li>)}
    </ul>
  )};

export default MovieList;
