import React from 'react';
import Container from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand className='fs-10' href="#home">
                <h2>Universo Game</h2>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default ColorSchemesExample;