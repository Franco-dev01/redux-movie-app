import React from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../../features/movies/movieSlice";

import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const { movies, loading, hashError } = useSelector(moviesSelector);

  const renderMovies = () => {
    if (loading) return <p>Loadnd movies...</p>;
    if (hashError) return <p>Cannot display movies...</p>;

    return movies && movies?.length > 0 ? (
      movies.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{movies?.error}</h3>
      </div>
    );
  };

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies()}</div>
      </div>
    </div>
  );
};

export default MovieListing;
