import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
//components
import MovieForm from './MovieForm';

function MovieModal(props) {
    const { handleNewMovie } = props;
    //state
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState({
        title: "",
        rate: 0,
        year: 0,
        description: "",
        img: ""
    })
    //functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMovie = (event) => {
        setMovie({ ...movie, [event.target.name]: event.target.value })
    }
    //render
    return (
        <div style={{ padding: 8 }}>
            <Button variant="primary" onClick={handleShow}>
                Click to add a movie
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MovieForm handleMovie={handleMovie} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleNewMovie(movie);
                        handleClose()
                    }}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MovieModal