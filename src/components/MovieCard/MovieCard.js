import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <Link to={`/movie/${data?.id}`} className="_link">
          <div className="card-top">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
              alt="image"
              width={200}
              height={200}
            />
          </div>
        </Link>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>{data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
