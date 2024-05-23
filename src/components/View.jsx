import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookCard from './BookCard'
import { getAllBooksAPI } from '../../services/allAPI'

function View({ addBookResponse, setSelectedBook, onDeleteBook}) {
  const [showAllBooks, setShowAllBooks] = useState([])
  const [deleteResponse, setDeleteResponse] = useState("")
  const [updateResponse, setUpdateResponse] = useState("")

  useEffect(() => {
    getAllBooks()
  }, [addBookResponse, deleteResponse, updateResponse])

  const getAllBooks = async () => {
    try {
      const result = await getAllBooksAPI()
      if (result.status >= 200 && result.status < 300) {
        setShowAllBooks(result.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Row className='w-100 pb-5 mb-5'>
      {showAllBooks.length > 0 ? showAllBooks.map(book => (
        <Col key={book.id} lg={12} className='w-100'>
         <BookCard 
          showBook={book} 
          setDeleteResponse={setDeleteResponse} 
          setSelectedBook={setSelectedBook} 
          setUpdateResponse={setUpdateResponse} 
          onDeleteBook={onDeleteBook}  // Pass the handler to BookCard
        />
        </Col>
      )) : (
        <div style={{height:'100vh'}} className="fw-bolder text-danger d-flex justify-content-center mt-5 flex-wrap">Nothing to display</div>
      )}
    </Row>
  )
}

export default View
