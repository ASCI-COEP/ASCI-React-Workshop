import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>ASCI React.js</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#features'>Counter App</Nav.Link>
            <Nav.Link href='#pricing'>Search Filtering</Nav.Link>
            <Nav.Link href='#pricing'>Random Jokes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
