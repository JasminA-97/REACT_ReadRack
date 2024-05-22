import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function About({ book }) {
  if (!book) {
    return <div className="text-center">Select a book to see its details.</div>
  }

  return (
    <Card className='p-3'>
      <Card.Img height={'400vh'} className='w-75 m-auto pb-2 ps-3 pe-3 pt-0' variant="top" src={book.coverImage} alt={`${book.title} cover`} />
      <Card.Body className='p-3'>
        <Card.Title className='text-primary fs-3 text-center fw-bold'>{book.title}</Card.Title>
        <Card.Text>{book.quote}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group">
        <ListGroupItem><strong>Author : </strong> {book.author}</ListGroupItem>
        <ListGroupItem><strong>Genre : </strong> {book.genres}</ListGroupItem>
        <ListGroupItem><strong>Review:</strong> {book.review}</ListGroupItem>
        <ListGroupItem><strong>Completed Date:</strong> {book.completedDate}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default About
