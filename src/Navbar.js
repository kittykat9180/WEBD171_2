import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default class NavBar extends React.Component{
  render(){
    return (
      <Navbar className='container' bg="info" expand="lg">
  <Container>
    <Navbar.Brand href=" "><b>Navigation Bar</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar" />
    <Navbar.Collapse id="basic-navbar">
      <Nav>
        <Nav.Link href=" ">Page 1</Nav.Link>
        <Nav.Link href=" ">Page 2</Nav.Link>
        <Nav.Link href=" ">Page 3</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
  }
}