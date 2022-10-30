import React from 'react'
import MovieCard from './MovieCard';

const MovieList = (props) => {
    const { movies } = props;
    return (
        <div style={{ display: 'flex', gap: 4, flexWrap: "wrap" }}>
            {
                movies.map((movie, index) => <MovieCard movie={movie} key={index} />)
            }

        </div>
    )
}

export default MovieList