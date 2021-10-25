import { Card } from 'react-bootstrap'
import { Typography,Rating } from '@mui/material'


export default function MovieCard ({ movie }) {
    return (
        <div>
            <Card style={{ width: '10rem', height: '20px' }}>
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title><h6>{movie.title}</h6></Card.Title>
                    <Card.Text>
                        <Typography component="legend"></Typography>
                        <Rating name="read-only" value={movie.rating} readOnly />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}