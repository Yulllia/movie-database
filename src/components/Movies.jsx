import React from "react";

function Movies({ movie, loading, genre }) {
  if (loading) {
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }
  return (
    <div className="container">
      <h1 className="text-primary title-align mb-5 mx-5">Movies</h1>
      {movie &&
        movie.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                // className="align-center image-place img-fluid rounded float-start col-12 col-md-2 mx-3"
              />
              <p className="">{item.title}</p>
              {item.genre_ids.map((id, key)=>{
              return <span className="" key={key}>{genre[id]} </span>
              })}
            </div>
          );
        })}
    </div>
  );
}
export default Movies;
