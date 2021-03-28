import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

let linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
};

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/' style={linkStyle}>
            ASCI React.js
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link>
              <Link to='/counter-app' style={linkStyle}>
                Counter App
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/search-filter' style={linkStyle}>
                Search Filtering
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/random-joke' style={linkStyle}>
                Random Jokes
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
