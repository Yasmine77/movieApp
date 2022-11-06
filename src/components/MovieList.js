import React from 'react'
import MovieCard from './MovieCard';
import { Routes, Link } from "react-router-dom";

const MovieList = (props) => {
    const { movies } = props;
    return (
        <div style={{ display: 'flex', gap: 4, flexWrap: "wrap" }}>
            {movies.map((movie) => (
          <Link
            to={`/MovieTrailer/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <MovieCard movie={movie} key={movie.id} />{" "}
          </Link>
        ))}

        </div>
    )
}

export default MovieList