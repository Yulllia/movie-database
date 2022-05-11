import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function SearchMovie() {
  const location = useLocation();
  const value = location.state;
  const [search, setSearchMovies] = useState([]);
  const URL = "https://api.themoviedb.org/3";
  const apiKey = "2eff658b33ca2678abb723a6e358e0bd";

  useEffect(() => {
    const fetchMovies = async () => {
      const searchName = await fetch(
        `${URL}/search/movie?api_key=${apiKey}&language=uk&query=${value}`
      );
      await searchName
        .json()
        .then((data) =>
          setSearchMovies(data.results.filter((el) => el.poster_path !== null))
        );
    };
    fetchMovies();
  }, [value]);

  return (
    <div className="card-backround">
    <Navbar/>
    <div className="container" >
      <div className="row">
        <h1 className="title-top text-primary title-align mb-5 mx-5">
          Рекомендовані фільми
        </h1>
        {search &&
          search.map((item, index) => {
            return (
              <div key={index} className="col-sm-5 col-lg-2 col-12">
                <Link to={`/details/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="align-center image-place img-fluid rounded col-12"
                />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
}

export default SearchMovie;
