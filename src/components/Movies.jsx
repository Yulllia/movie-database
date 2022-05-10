import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { localContext } from "../context/ContextLocalStorage";


function Movies({ movie, loading }) {
  const { addFavouriteMovie, favourites } = useContext(localContext);
  if (loading) {
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <div className="container">
      <h1 className="title-top text-center title-align mb-5 mx-5">
        Список популярних фільмів
      </h1>
      <div className="row">
        {movie &&
          movie.map((item, index) => {
            const filmId = favourites?.find((film) => film.id === item.id);
            return (
              <div key={index} className="col-sm-4 col-lg-3 col-xl-2 col-lg-2 col-12">
                <div
                  href="#"
                  className="button-style card-link btn btn-info w-100 orientation"
                  onClick={() => addFavouriteMovie(item)}
                >
                  {filmId ? "Додано!" : "Додати в обране"}
                </div>
                {item.poster_path !== null && (
                  <Link to={`/details/${item.id}`} state={addFavouriteMovie}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                      className="align-center orientation image image-place img-fluid rounded col-12"
                    />
                  </Link>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Movies;
