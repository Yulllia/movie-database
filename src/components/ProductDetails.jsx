import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { localContext } from "../context/ContextLocalStorage";

function ProductDetails() {
  const [loading, setLoading] = useState(true);
  const [fetchDetails, setMovieFetchDetails] = useState([]);
  const [recomFilm, setRecomFilms] = useState([]);
  const URL = "https://api.themoviedb.org/3";
  const apiKey = "2eff658b33ca2678abb723a6e358e0bd";
  const { id } = useParams();
  const navigate = useNavigate();

  const { addFavouriteMovie, favourites } = useContext(localContext);

  if (loading) {
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>;
  }

  //check if film is in localStorage
  const searchId = favourites?.find((film) => film.id === fetchDetails.id);

  // Fetch Details for Movie and Recomndation Films
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movies = await fetch(
        `${URL}/movie/${id}?api_key=${apiKey}&language=uk`
      );
      movies.json().then((data) => setMovieFetchDetails(data));
      const recommendationsFilm = await fetch(
        `${URL}/movie/${id}/recommendations?api_key=${apiKey}&language=uk`
      );
      recommendationsFilm.json().then((data) => setRecomFilms(data.results));
      setLoading(false);
      window.scrollTo(0, 0);
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <div className="backround-image bg-image pb-5">
        <Navbar fetchDetails={fetchDetails} favourites={favourites} />
        <div className="card mx-auto mt-5 mb-5 card-size">
          <img
            src={`https://image.tmdb.org/t/p/w500${fetchDetails.poster_path}`}
            alt={fetchDetails.title}
            className="card-img-top"
          />
          <div className="card-body bg-light text-dark">
            <h4 className="card-title">{fetchDetails.title}</h4>
            <p className="card-text">{fetchDetails.overview}</p>
            <span className="title">Жанр:</span>{" "}
            {fetchDetails.genres?.map((el, key) => {
              return <span key={key}>{el?.name} </span>;
            })}
            <div className="d-flex justify-content-between mt-4">
              <div
                href="#"
                className="btn btn-primary text-center button-fav"
                onClick={() => navigate(-1)}
              >
                Повернутися назад
              </div>
              <div
                href="#"
                className="btn btn-primary text-center button-fav"
                onClick={() => addFavouriteMovie(fetchDetails)}
              >
                {searchId ? "Додано!" : "Додати в обране+"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomendation-backround">
        <h1 className="title-top text-center mb-5 mx-5">
          {recomFilm.length > 0
            ? "Рекомендовані фільми"
            : " Немає рекомендованих фільмів"}
        </h1>
        <div className="container">
          <div className="row">
            {recomFilm &&
              recomFilm.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 col-sm-4 image-destination">
                    {item.poster_path !== null && (
                      <Link to={`/details/${item.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          alt={item.title}
                          className="align-center image-place img-fluid rounded"
                        />
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
