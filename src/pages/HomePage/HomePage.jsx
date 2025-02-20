import React, { useEffect, useState } from 'react'
import { fetchData } from '../../API';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import s from "./HomePage.module.css"

const HomePage = () => {
const [movie, setMovie ] = useState([]);
const [loading, setLoading ] = useState(false);
const [error, setError ] = useState(false);

useEffect( ()=>{
( async () =>{
    try {
      setLoading(true); 
      setError(false); 
      const { results } = await fetchData('/3/trending/movie/day'); 
      setMovie(results); 
    } catch (error) {
      setError(true);
      console.log(error.message); 
    } finally {
      setLoading(false); 
    }
  })();
},[]);

  return ( 
  <div>
    <h2 className={s.title}>Trending today</h2>
    { loading && <Loader/> }
    { error && <p className={s.error}>Something went wrong...</p> }
    <MovieList movieFetch={movie}/>
  </div>
  )};

export default HomePage;
