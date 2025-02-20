import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { fetchData } from '../../API';
import s from "./MovieDetailsPage.module.css";
import Loader from '../../components/Loader/Loader';

const MovieDetailsPage = () => {
const [ movieDetails, setMovieDetails ] = useState(null);
const { movieId }  = useParams();
const location = useLocation();
const goBack = useRef(location.state ?? "/movies");

useEffect(()=>{
  (async ()=>{
    try {
      const movieDet = await fetchData( `/3/movie/${movieId}` );
      setMovieDetails(movieDet); 
    } catch (error) {
      console.log(error.message);
    }
  })();
}, [movieId]);

if(!movieDetails){ return <Loader/> };

const { genres, backdrop_path, original_title, vote_average, overview } = movieDetails;

  return (
   <div>
    <Link to={goBack.current} className={s.goBackBtn}>&#x2190; Go Back</Link>
     <div className={s.detailsCont}>
      <div className={s.innerPictCont}>
        <img src={ backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : "https://www.reelviews.net/resources/img/default_poster.jpg"} alt={original_title} height={480}/>
        </div>
        <div className={s.innerDetailCont}>
            <h3 className={s.title}>{original_title}</h3>
            <p className={s.description}>User Score: <span>{vote_average}</span></p>
            <h4 className={s.title}>Overview</h4>
            <p className={s.description}>{overview}</p>
            <h5 className={s.title}>Genres</h5>
            <p className={s.description}>{genres.map(genre => genre.name).join(" ")}</p>
        </div>
    </div>
    <div className={s.innerDetailsCont}>
      <p>Additional Information</p>
      <nav>
      <ul className={s.navDescription}>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Review</Link></li>
      </ul>
      </nav>
    </div>   
      <Outlet/>
   </div>
  )
}

export default MovieDetailsPage;

