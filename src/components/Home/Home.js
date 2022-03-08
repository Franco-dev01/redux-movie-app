import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { featMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featMovies());
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
