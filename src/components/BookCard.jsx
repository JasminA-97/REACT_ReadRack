import React, { useState } from 'react';
import { deleteABookAPI, updateABookAPI } from '../../services/allAPI';

import { Button, FloatingLabel, Form, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';

function BookCard({ showBook, setDeleteResponse, setSelectedBook, setUpdateResponse,onDeleteBook }) {

  const handleAboutBook = async() => {
    setSelectedBook(showBook); 
  };

  const [editABook, setEditABook] = useState({});
  const [show, setShow] = useState(false);

  const handleDeleteBook = async (bookId) => {
    if (window.confirm(`Do you want to delete ${showBook.title}?`)) {
      try {
        const result = await deleteABookAPI(bookId);
        setDeleteResponse(result.data);
        onDeleteBook(bookId);  // Notify parent component
        toast.warning(`${showBook.title} deleted`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditBook = (editthisbook) => {
    setEditABook(editthisbook);
    setShow(true);
  };

  const handleUpdateBook = async (bookid, bookDetails) => {
    const { title, author, quote, genres, coverImage, review, completedDate } = bookDetails;
    if (title && author && quote && genres && coverImage && review && completedDate) {
      try {
        const result = await updateABookAPI(bookid, bookDetails);
        setUpdateResponse(result.data);
        setSelectedBook(result.data);  // Update the selected book
        setShow(false);
        toast.success(`Updated Successfully!!!`);
   
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please fill the form completely!!!');
    }
  };

  return (
    <div className='w-100 pt-0'>
      <div className="card mb-3 rounded-5 w-100 border-3" style={{ height: 'auto' }}>
        <div className="row w-100">
          <div className="col-md-4 ">
            <img onClick={handleAboutBook} style={{ height: '125px', width: '130px' }} src={showBook.coverImage} className="img-fluid rounded-start ps-5 pe-0 pt-3 pb-0" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ps-0">
              <div className='d-flex justify-content-between align-items-center'>
                <div onClick={handleAboutBook} className="card-title fw-bolder fs-5 text-primary">{showBook.title}</div>
                <div className="card-text text-body-secondary">{showBook.completedDate}</div>
              </div>
              <div style={{ fontSize: '14px' }} className="card-text text-primary">"{showBook.quote.slice(0, 90)}"</div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="card-text text-secondary fs-6 fw-bolder"> - {showBook.author}</div>
                <div>
                  <button onClick={() => handleEditBook(showBook)} className='btn'><i className="fa-solid fa-pen-to-square text-success"></i></button>
                  <button onClick={() => handleDeleteBook(showBook.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal size='lg' show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary fw-bolder'>Update Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel controlId="floatingTitle" label="Title" className="mb-3">
            <Form.Control
              value={editABook.title || ''}
              onChange={e => setEditABook({ ...editABook, title: e.target.value })}
              type="text"
              placeholder="Book Title"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingQuote" label="Quote" className="mb-3">
            <Form.Control
              value={editABook.quote || ''}
              onChange={e => setEditABook({ ...editABook, quote: e.target.value })}
              type="text"
              placeholder="Quote"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingAuthor" label="Author" className="mb-3">
            <Form.Control
              value={editABook.author || ''}
              onChange={e => setEditABook({ ...editABook, author: e.target.value })}
              type="text"
              placeholder="Author"
            />
          </FloatingLabel>
{/* 
          <DropdownButton
            id="dropdown-basic-button"
            title={editABook.genres || "Genres"}
            className="w-100 mb-3"
          >
            <Dropdown.Item onClick={() => setEditABook({ ...editABook, genres: 'Fiction' })}>Fiction</Dropdown.Item>
            <Dropdown.Item onClick={() => setEditABook({ ...editABook, genres: 'Non Fiction' })}>Non Fiction</Dropdown.Item>
          </DropdownButton> */}




          <Dropdown onSelect={(genres) => setEditABook({ ...editABook, genres })}>
              <Dropdown.Toggle style={{backgroundColor:'white', height:'50px',color:'black', textAlign:'left'}} id="dropdown-basic" className="w-100 mb-3">
                {editABook.genres || "Genres"}
              </Dropdown.Toggle>
              <Dropdown.Menu className='w-100'>
                <Dropdown.Item eventKey="Fiction">Fiction</Dropdown.Item>
                <Dropdown.Item eventKey="Non Fiction">Non Fiction</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>









          <FloatingLabel controlId="floatingImage" label="Cover Image URL" className="mb-3">
            <Form.Control
              value={editABook.coverImage || ''}
              onChange={e => setEditABook({ ...editABook, coverImage: e.target.value })}
              type="text"
              placeholder="Cover Image URL"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingReview" label="Review" className="mb-3">
            <Form.Control
              as="textarea"
              value={editABook.review || ''}
              onChange={e => setEditABook({ ...editABook, review: e.target.value })}
              placeholder="Review"
              style={{ height: '100px' }}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingDate" label="Completed Date" className="mb-3">
            <Form.Control
              value={editABook.completedDate || ''}
              onChange={e => setEditABook({ ...editABook, completedDate: e.target.value })}
              type="date"
              placeholder=''
            />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}> Close</Button>
          <Button onClick={() => handleUpdateBook(editABook.id, editABook)} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default BookCard;
