import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { FaCocktail } from 'react-icons/fa'

export function MyNavBar({ menu }) {


  let homeUrl = 'http://localhost:3000/home';

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">

          {menu.map((item, index) =>
            <Link className='nav-link' style={{ marginLeft: 12 }} key={index} to={item.url}>{item.name}</Link>
          )}
        </Nav>
        <Link to={homeUrl} className='nav-link'>
        <Navbar.Brand style={{ cursor: 'pointer' }}><FaCocktail color='#31c288' /> MyCocktail</Navbar.Brand>
        </Link>
      </Navbar>
    </>
  );
}

