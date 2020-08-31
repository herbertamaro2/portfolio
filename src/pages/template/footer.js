import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaBehance, FaSkype, FaPinterest, FaEnvelope, FaGlobe } from 'react-icons/fa';

function Footer() {
 return (
 	<div>
	  <div className="whatsapp-footer"><a href="http://wa.me/3530833818131">Estamos Online</a></div>
	  <footer className="d-flex flex-row">

	  	<div className="redes-sociais col mx-auto text-center">
	  	<ul className="list-inline">
	  		<li className="list-inline-item"><a href="https://github.com/herbertamaro2" target="_blank"><FaGithub /></a></li>
	  		<li className="list-inline-item"><a href="https://facebook.com/herbertdesigner" target="_blank"><FaFacebook /></a></li>
	  		<li className="list-inline-item"><a href="https://instagram.com/herbertamaro" target="_blank"><FaInstagram /></a></li>
	  		<li className="list-inline-item"><a href="https://behance.net/herbertamaro" target="_blank"><FaBehance /></a></li>
	  		<li className="list-inline-item"><a href="https://www.flickr.com/photos/herbertdesigner" target="_blank"><FaFlickr /></a></li>
	  		<li className="list-inline-item"><a href="skype:herbertamaro?chat"><FaSkype /></a></li>
	  		<li className="list-inline-item"><a mailto="mandajob@herbertamaro.com"><FaEnvelope /></a></li>
	  	</ul>
	  	</div>
	  	
	  </footer>
  </div>
  );
}

export default Footer;