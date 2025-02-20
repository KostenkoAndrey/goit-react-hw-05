import React, { useEffect, useState } from 'react'
import { fetchData } from '../../API';
import { useParams } from 'react-router-dom';
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [ movieCast, setMovieCast ] = useState(null);
  const { movieId }  = useParams();


  useEffect(()=>{
    (async ()=>{
      try {
        const { cast } = await fetchData( `/3/movie/${movieId}/credits` );
        setMovieCast(cast); 
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);
  
  if(!movieCast){ 
  return <h3>Loading...</h3> };

  return (
  <ul className={s.castList}>
  {movieCast.map(({ cast_id, name, character, profile_path }) => {
  return <li key={cast_id} className={s.castItem}>
    <div className={s.castPictCont}>
      <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : "https://www.reelviews.net/resources/img/default_poster.jpg"} alt={name}/>
    </div>
<div className={s.castDescCont}>
<p>Character</p>
<p>{character}</p>
</div>
  </li>
})}
    </ul>
    )
}

export default MovieCast;

