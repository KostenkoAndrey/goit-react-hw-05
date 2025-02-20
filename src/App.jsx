import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "modern-normalize";

import Navigation from './components/Navigation/Navigation';
const HomePage = lazy(()=> import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(()=> import('./pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(()=> import('./pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(()=> import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieReviews = lazy(()=> import('./components/MovieReviews/MovieReviews'));
const MovieCast = lazy(()=> import('./components/MovieCast/MovieCast'));



  function App() {
    return (<>
      <Navigation/>
      <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path='cast' element={<MovieCast/>}/>
        <Route path='reviews' element={<MovieReviews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      </>
    )
  }

  export default App;
