import React from 'react'
import { Form } from 'react-bootstrap'

const MovieForm = (props) => {
    const { handleMovie } = props;
    //state
    //function
    //render
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control name="title" type="text" onChange={handleMovie} placeholder="Enter movie title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Description</Form.Label>
                <Form.Control name="description" type="text" onChange={handleMovie} placeholder="Enter movie description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Poster</Form.Label>
                <Form.Control name="img" type="text" onChange={handleMovie} placeholder="Enter movie poster" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Year</Form.Label>
                <Form.Control name="year" type="number" onChange={handleMovie} placeholder="Enter movie year" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Rate</Form.Label>
                <Form.Control name="rate" type="number" onChange={handleMovie} placeholder="Enter movie rate" />
            </Form.Group>
        </Form>
    )
}

export default MovieForm