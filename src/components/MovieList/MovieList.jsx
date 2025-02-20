import s from "./MovieList.module.css";
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieFetch }) => {
const location = useLocation();
  console.log(movieFetch);
  
  return (
    <ul className={s.movieList}>
    {movieFetch.map(({ id, original_title, poster_path }) => <li key={id}>
      <Link to={`/movies/${id}`} state={location}>
      <div className={s.wrapperContainer}>
      <div className={s.movieContainer}>
      <img src={ poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://www.reelviews.net/resources/img/default_poster.jpg"} alt={original_title}/>
      </div>
      <div className={s.descriptionContainer}>
        {original_title}
        </div>
      </div>
      </Link>
      </li>)}
    </ul>
  )};

export default MovieList;
