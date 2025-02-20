import s from "./MovieList.module.css";
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieFetch }) => {
const location = useLocation();
  
  return (
    <ul className={s.movieList}>
    {movieFetch.map(({ id, original_title, poster_path }) => <li key={id} className={s.movieListItem}>
      <Link to={`/movies/${id}`} state={location}>
      <div className={s.movieContainer}>
      <img src={ poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://www.reelviews.net/resources/img/default_poster.jpg"} alt={original_title} width="300" height="420"/>
      </div>
      <div className={s.descriptionContainer}>
        <p className={s.desctext}>{original_title}</p>
        </div>
      </Link>
      </li>)}
    </ul>
  )};

export default MovieList;
