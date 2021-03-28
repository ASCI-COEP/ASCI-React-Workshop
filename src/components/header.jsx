import React from 'react';
import {Container} from 'react-bootstrap';

function Header(props) {
  return (
    <Container className='mt-5'>
      <h3 className='text-center'>{props.title}</h3>
    </Container>
  );
}

export default Header;
