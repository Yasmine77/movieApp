import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"

const MovieCard = (props) => {
    const { movie } = props;
    return (
        <Card style={{ width: '14rem', color: '#404040' }}>
            <Card.Img variant="top" src={movie.img} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <Card.Text>
                    {movie.year}
                </Card.Text>
                <ReactStars
                    count={5}
                    size={24}
                    value={movie.rate}
                    edit={false}
                />
            </Card.Body>
        </Card>
    )
}

export default MovieCard