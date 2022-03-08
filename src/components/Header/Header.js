import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="movieContent">
        <Link to="/">
          <div className="logo">The movieDB</div>
        </Link>
        <div>Films</div>
        <div>Emission télévisées</div>
        <div>Articles</div>
        <div>plus</div>
      </div>

      <div className="movieContent-2">
        <div>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div>Fr</div>
        <div>Connexion</div>
        <div>Rejoindre TMDB</div>
        <div>
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
