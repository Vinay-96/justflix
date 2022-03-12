import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//  7c1e0c80

const API_URL = "http://www.omdbapi.com?apikey=7c1e0c80";

// const movie1 = {
//   Title: "James Bond 007: Everything or Nothing",
//   Year: "2003",
//   imdbID: "tt0366629",
//   Type: "game",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNzhiNjgxNGMtMzg0ZS00ODMwLTk5MTYtYzI0NDBmOThlZjY3XkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("war");
  }, []);

  return (
    <div className="app">
      <h1>JustFlix</h1>

      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
