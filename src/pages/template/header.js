import React from 'react';
import Logo from '../../assets/img/logo.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

function Header() {
 return (
  <div>
  <header>
  <div className="row m-0 py-4">
	  <div className="logo col-3 col-xs-8">
	  	
	  </div>
	  
  </div>
  </header>

  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <div className="contacte-us text-center col-6">
	  Contact us and ask for a quote<br />
	 +353 83 381 8131
	  </div>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Me</Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Portfolio</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
  );

}

export default Header;