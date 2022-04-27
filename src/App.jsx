import "./App.css";
import { useEffect, useState } from "react";
import Movies from "./components/Movies";

function App() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState({});

  const URL = "https://api.themoviedb.org/3";
  const urlGenre =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=2eff658b33ca2678abb723a6e358e0bd&language=uk";
  const apiKey = "2eff658b33ca2678abb723a6e358e0bd";

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
      setLoading(true);
      const movies = await fetch(
        `${URL}/movie/popular?api_key=${apiKey}&language=uk`
      );
      movies.json().then((data) => setMovie(data.results));
    };
    fetchMovies();
  }, []);

  return (
    <div className="container mt-5">
      <Movies movie={movie} loading={loading} genre={genre} />
    </div>
  );
}

export default App;
