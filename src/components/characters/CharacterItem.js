import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
            alt={item.title + "poster"}
          />
        </div>
        <div className="card-back">
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Release Date:</strong> {item.release_date}
            </li>
            <li>
              <strong>Popularity:</strong> {item.popularity}
            </li>
            <li>
              <strong>Rating:</strong> {item.vote_average}
            </li>
            <li>
              <strong>Summary:</strong> {item.overview}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
