import React, { useEffect, useState } from 'react'
import { fetchData } from '../../API';
import { useParams } from 'react-router-dom';
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
const [ movieReview, setMovieReview ] = useState(null);
const { movieId }  = useParams();


  useEffect(()=>{
    (async ()=>{
      try {
        const { results } = await fetchData( `/3/movie/${movieId}/reviews` );
        setMovieReview(results); 
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  if(!movieReview){ return <h3>Loading...</h3> }

  if (movieReview.length === 0) { return <h3>No reviews available</h3> } 

  return ( <ul className={s.reviewList}>
    { movieReview.map(({ id, author, content }) => <li key={id} className={s.itemReview}>
      <p className={s.reviewAuthor}>Author:{author}</p>
      <p>{content}</p>
      </li>)}
   </ul>
  )
}

export default MovieReviews;
