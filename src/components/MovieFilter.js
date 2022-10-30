import React from 'react'
import { Form } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const MovieFilter = (props) => {
    const { setKeyWord, setKeyRate, keyRate } = props;
    //function
    const ratingChanged = (newRating) => {
        setKeyRate(newRating)
    };

    //render
    return (
        <div style={{ display: "flex", gap: 8, padding: 8 }}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search by movie title" onChange={(event) => setKeyWord(event.target.value)} />
                </Form.Group>
            </Form>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                value={keyRate}
            />
        </div>
    )
}

export default MovieFilter