import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar>
      <Container>   
        <Navbar.Brand> ResForUkraine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link href="#Home" className="colorChangeZero"> Home </Nav.Link>
            <Nav.Link href="#Completed" className="colorChangeOne" > Completed </Nav.Link>
            <Nav.Link href="#Similar-Initiatives" className="colorChangeTwo"> Similar Initiatives </Nav.Link>
            <Nav.Link href="#About"className="colorChangeThree"> About </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation; 