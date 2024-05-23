import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function About({ book }) {
  if (!book) {
    return <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center flex-column flex-wrap"><i style={{fontSize:'100px'}} className="fa-solid fa-book text-light"></i><p className="text-light fw-bolder p-5 ">Select a book to see its details.</p></div>
  }

  return (
<>
   <div>
        <Card style={{paddingBottom:'50px',paddingTop:'10px'}} className=' bg-light'>
       
          <div className="imgquote d-flex justify-content-around align-items-center">
           <div className='w-100'> <Card.Img  height={'400px'} className='m-auto p-4 ' variant="top" src={book.coverImage} alt={`${book.title} cover`} /></div>
            <div className='w-100'>
              <Card.Body className=''>
                <Card.Text>{book.quote}</Card.Text>
                <Card.Text className='fw-bolder'>-{book.author}</Card.Text>
              </Card.Body>
            </div>
          </div>
  
          <ListGroup style={{  textAlign: 'justify' ,lineHeight:'2rem'}} className="list-group pb-5 mt-5 ms-3 me-3 ">
            <ListGroupItem ><h3 className='text-center text-primary fs-3 fw-bold'>{book.title}</h3></ListGroupItem>
            <ListGroupItem><strong>Genre : </strong> {book.genres}</ListGroupItem>
            <ListGroupItem><strong>Review : </strong><p> {book.review}</p></ListGroupItem>
            <ListGroupItem><strong>Completed Date : </strong> {book.completedDate}</ListGroupItem>
          </ListGroup>
        </Card>
   </div>
</>
  )
}

export default About
