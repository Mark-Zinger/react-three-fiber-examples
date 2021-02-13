import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React Three Fiber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#docs">Docs</Nav.Link>
            <Nav.Link href="#examples">Examples</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;
