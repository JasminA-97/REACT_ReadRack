import React, { useState } from 'react'
import { Button, Dropdown, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addNewBookAPI } from '../../services/allAPI';
import { toast } from 'react-toastify';



function AddNew({setAddBookResponse}) {
  const [show, setShow] = useState(false);
  const [bookDetails,setBookDetails] = useState({ title:"", author:"",quote:"", genres:"", coverImage:"",review:"",completedDate:""})
  console.log(bookDetails);
  const handleAddNewBook = async()=>{
    const {title,author,quote,genres,coverImage,review,completedDate }=bookDetails
    if(title && author && quote && genres && coverImage && review && completedDate ){
      try{
        const result = await addNewBookAPI(bookDetails)
        if(result.status>=200 && result.status<300){
          console.log(result.data);
          setAddBookResponse(result.data)
          setBookDetails({ title:"", author:"", quote:"", genres:"", coverImage:"",review:"",completedDate:""})
          setShow(false)
          toast.success(`${result.data.title} Added Successfully`)
        }else{
          alert(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.warning('Fill the form completely!!!')
    }
  }

  return (
  <>
      <div style={{paddingTop:'75px'}} className='d-flex justify-content-between align-items-center my-5 w-50'>
        <h4 className='fw-bolder text-primary'>Your Read List</h4>
        <Button onClick={() => setShow(true)} className='btn btn-primary'>New Book&nbsp;&nbsp;<span className='fw-bolder'>+</span></Button>
      </div>
      <div className='d-flex w-100 align-items-center justify-content-center'>
          <Modal size='lg' show={show} onHide={() => setShow(false)}  backdrop="static" keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title className='text-primary fw-bolder'>Add New Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
  
              <FloatingLabel controlId="floatingTitle" label="Title" className="mb-3"  >
                <Form.Control onChange={e=>{setBookDetails({...bookDetails,title:e.target.value})}} type="text" placeholder="Book Title" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingQuote" label="Quote" className="mb-3"  >
                <Form.Control onChange={e=>{setBookDetails({...bookDetails,quote:e.target.value})}} type="text" placeholder="Quote" />
              </FloatingLabel>
              
              <FloatingLabel controlId="floatingAuthor" label="Author" className="mb-3"  >
                <Form.Control  onChange={e=>{setBookDetails({...bookDetails,author:e.target.value})}}  type="text" placeholder="Author" />
              </FloatingLabel>
  
              <Dropdown onSelect={(genres) => setBookDetails({ ...bookDetails, genres })}>
              <Dropdown.Toggle style={{backgroundColor:'white', height:'50px',color:'black', textAlign:'left'}} id="dropdown-basic" className="w-100 mb-3">
                {bookDetails.genres || "Genres"}
              </Dropdown.Toggle>
              <Dropdown.Menu className='w-100'>
                <Dropdown.Item eventKey="Fiction">Fiction</Dropdown.Item>
                <Dropdown.Item eventKey="Non Fiction">Non Fiction</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
  
              <FloatingLabel controlId="floatingImage" label="Cover Image URL" className="mb-3"  >
                <Form.Control  onChange={e=>{setBookDetails({...bookDetails,coverImage:e.target.value})}}  type="text" placeholder="Cover Image URL" />
              </FloatingLabel>
  
              <FloatingLabel controlId="floatingReview" label="Review" className="mb-3"  >
              <Form.Control as="textarea" onChange={e=>{setBookDetails({...bookDetails,review:e.target.value})}} placeholder="Review" style={{ height: '100px' }} />
              </FloatingLabel>
  
              <FloatingLabel controlId="floatingDate" label="Completed Date" className="mb-3"  >
                <Form.Control  onChange={e=>{setBookDetails({...bookDetails,completedDate:e.target.value})}}  type="date"  placeholder=''/>
              </FloatingLabel>
  
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}> Close</Button>
              <Button onClick={handleAddNewBook} variant="primary">Add</Button>
            </Modal.Footer>
        </Modal>
  
      </div>
  </>
  )
}

export default AddNew