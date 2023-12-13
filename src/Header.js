import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'


const Header = () => {
  return (
    <div>
    <Navbar expand="lg">
      <Container>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className='link text-primary fwb-4 '>Home</Nav.Link>
            <Nav.Link href="/signup" className='link text-primary'>Signup</Nav.Link>
            <Nav.Link href="#" className='link text-primary'>Menu</Nav.Link>
            <Nav.Link href="/login" className='link text-primary'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header