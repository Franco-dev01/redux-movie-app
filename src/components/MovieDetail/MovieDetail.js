import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetail,
  moviesSelector,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const { movies, loading } = useSelector(moviesSelector);

  useEffect(() => {
    dispatch(fetchMovieDetail(params));
  }, [dispatch]);

  return (
    <div className="container-details">
      <div className="info-details">
        {loading ? (
          <p className="loader">Featch movie ....</p>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movies?.backdrop_path}`}
            width="100%"
            heinght="100%"
          />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
