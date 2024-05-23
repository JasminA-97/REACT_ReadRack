import React, { useState } from 'react'
import AddNew from '../components/AddNew'
import View from '../components/View'
import { Container } from 'react-bootstrap'
import About from '../components/About'
import Header from '../components/Header'

function Home({insideHome}) {
  const [addBookResponse, setAddBookResponse] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  const handleDeleteBook = (deletedBookId) => {
    if (selectedBook && selectedBook.id === deletedBookId) {
      setSelectedBook(null);  // Clear selected book if it was deleted
    }
  };

  return (
    <>
      <Header insideHome={true}/>
      <Container>
        <AddNew setAddBookResponse={setAddBookResponse} />
        <div className='d-flex justify-content-between align-items-center w-100 flex-wrap'>
          <div className='col-lg-7'>
          <View addBookResponse={addBookResponse} setSelectedBook={setSelectedBook} onDeleteBook={handleDeleteBook} />
          </div>
          <div className="col-lg-0"></div>
          <div className='about-section col-lg-5'>
            <About book={selectedBook} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
