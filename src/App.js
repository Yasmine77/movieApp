
import { useState } from 'react';
import './App.css';
import MovieFilter from './components/MovieFilter';
//components
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import { BrowserRouter, Link } from "react-router-dom";
import MovieTrailer from './components/MovieTrailer';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { data } from "./data";

function App() {
  //state
  const [textFilter, setTextFilter] = useState("");
  const [starsRate, setStarsRate] = useState(0);
  const [movies, setMovies] = useState(data);
  const [keyWord, setKeyWord] = useState("")
  const [keyRate, setKeyRate] = useState(0)
  //function
  const handleNewMovie = (newMovie) => {
    setMovies(movies.concat(newMovie))
  }
  console.log(keyRate);
  //render
  return (
    <div className="App-header">
      <Routes>
      <Route
          path="/"
          element={
            <Container>
      <MovieFilter setKeyWord={setKeyWord} keyRate={keyRate} setKeyRate={setKeyRate} />
      <MovieModal handleNewMovie={handleNewMovie} />
      <MovieList movies={movies && movies.filter((m) => m.title.toLowerCase().includes(keyWord.toLowerCase().trim()) && m.rate >= keyRate)} />
      </Container>
          }
        />
      <Route
          path="/MovieTrailer/:movieid"
          element={<MovieTrailer/>}
        />
      </Routes>
    </div>
  );
}

export default App;
