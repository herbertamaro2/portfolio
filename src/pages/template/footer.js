import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaBehance, FaSkype, FaPinterest, FaEnvelope, FaGlobe } from 'react-icons/fa';

function Footer() {
 return (
 	<div>
	  <footer className="d-flex flex-row">
	  	<div className="redes-sociais col mx-auto text-center">
	  	<ul className="list-inline">
	  		<li className="list-inline-item"><Link to="#"><FaGithub /></Link></li>
	  		<li className="list-inline-item"><Link to="#"><FaFacebook /></Link></li>
	  		<li className="list-inline-item"><Link to="#"><FaInstagram /></Link></li>
	  		<li className="list-inline-item"><Link to="#"><FaTwitter /></Link></li>
	  		<li className="list-inline-item"><Link to="#"><FaBehance /></Link></li>
	  		<li className="list-inline-item"><Link to="#"><FaSkype /></Link></li>
	  		<li className="list-inline-item"><Link to="#"><FaPinterest /></Link></li>
	  		<li className="list-inline-item"><Link to="#"><FaEnvelope /></Link></li>
	  	</ul>
	  	</div>
	  	
	  </footer>
  </div>
  );
}

export default Footer;