import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideHome}) {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand>
          <Link className='fw-bolder fs-3 text-light' style={{ textDecoration: 'none' }} to={'/home'}>
            <i className="fa-brands fa-readme"></i>&nbsp;ReadRack
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

{         insideHome&&
              <Nav.Link>
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>Back</Link>
            </Nav.Link>
}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
