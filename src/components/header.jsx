import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const header = () => {
    return (
  <Navbar bg='dark' expand="lg" data-bs-theme="dark" className='px-3 py-0'  sticky='top' >
    <LinkContainer to="/">
  <Navbar.Brand className="text-decoration-underline">BLOG </Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
    <Nav className="mr-auto">
      {/* <LinkContainer to="/service">
         <Nav.Link>Service</Nav.Link>
      </LinkContainer> */}
      
      <LinkContainer to="/allposts">
         <Nav.Link>All Posts</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
         <Nav.Link>About</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default header



