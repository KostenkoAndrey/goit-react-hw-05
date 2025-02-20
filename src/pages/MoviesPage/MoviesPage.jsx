import React, { useEffect, useState } from 'react'
import s from "./MoviesPage.module.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchData } from '../../API';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';


const MoviesPage = () => {
const [ movie, setMovie ] = useState([]);
const [loading, setLoading ] = useState(false);
const [error, setError ] = useState(false);
const [ searchParams, setSearchParams ] = useSearchParams();
const query = searchParams.get("query") ?? "";


const search = (value) =>{
if(!value.query){ return setSearchParams({}) };
searchParams.set("query", value.query);
searchParams.set("language", "en-US");
searchParams.set("include_adult", false);
setSearchParams(searchParams);
};

useEffect(()=>{
  (async ()=>{
    try {
      setLoading(true); 
      setError(false); 
      const {results} = await fetchData( '/3/search/movie', searchParams );
      setMovie(results);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }finally{
      setLoading(false);
    }
  }

  )(); 
}, [ searchParams ]);

  return (
    <>
    <SearchBar search={search} query={query}/>
    { loading && <Loader /> }
    { error && <p className={s.error}>Something went wrong...</p> }
    <MovieList movieFetch={movie}/>
    </>
  )
}

export default MoviesPage;
