import { useEffect, useState } from "react";
import Movies from "./Movies";
import PaginationPage from "./Pagination";
import Navbar from "./Navbar";
import ContextLocalStorage from "../context/ContextLocalStorage";

function FetchingData() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6);
  const URL = "https://api.themoviedb.org/3";
  const apiKey = "2eff658b33ca2678abb723a6e358e0bd";
  const urlGenre = `${URL}/genre/movie/list?api_key=${apiKey}&language=uk`;

  useEffect(() => {
    //fetch genre
    const fetchMovies = async () => {
      const genre = await fetch(urlGenre);
      genre.json().then((data) => {
        let resultGenre = data.genres.map((el) => ({ [el.id]: el.name }));
        let genresObj = Object.assign({}, ...resultGenre);
        setGenre(genresObj);
      });
      //fetch movies
      const movies = await fetch(
        `${URL}/movie/popular?api_key=${apiKey}&language=uk`
      );
      movies.json().then((data) => setMovie(data.results));
      setLoading(false);
    };
    fetchMovies();
  }, [urlGenre]);

  //Pagination
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovie = movie.slice(firstMovieIndex, lastMovieIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="card-backround">
      <Navbar />
      <ContextLocalStorage>
        <Movies movie={currentMovie} loading={loading} genre={genre} />
      </ContextLocalStorage>
      <PaginationPage
        moviesPerPage={moviesPerPage}
        totalMovies={movie.length}
        paginate={paginate}
      />
    </div>
  );
}

export default FetchingData;
