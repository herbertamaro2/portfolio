import React from 'react';
import Logo from '../../assets/img/logo.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import { FaWhatsapp } from 'react-icons/fa';

function Header() {
 return (
  <div>
  <Navbar expand="lg" className="fixed">
  <div className="container-fluid">
  <Navbar.Brand href="#home" className="col-3"><img src={Logo} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <div className="contacte-us text-center col-5">
	  Contact us and ask for a quote<br />
	          <FaWhatsapp /> +353 83 381 8131
	  </div>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About Me</Nav.Link>
      {/*<NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>*/}
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
  </div>
  );

}

export default Header;