import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand><Link className='fw-bolder fs-3' style={{textDecoration:'none',color:'white'}} to={'/home'}><i class="fa-brands fa-readme"></i>&nbsp;ReadRack</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link ><Link style={{textDecoration:'none',color:'white'}} to={'/Home'}>Home</Link></Nav.Link>
          {/* <Nav.Link><Link to={'/Home'}></Link></Nav.Link> */}
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header