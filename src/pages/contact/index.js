import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import './style.css';

function Contact() {
  return (
    <div className="App">
    <Header />
    <section className="content content-contact py-5 px-5">
    <h1>Contact</h1>
    <div class="content-page">
		<form id="contact-form"  method="POST">
		    <div className="form-group">
		        <label htmlFor="name">Name</label>
		        <input type="text" className="form-control" />
		    </div>
		    <div className="form-group">
		        <label htmlFor="exampleInputEmail1">Email address</label>
		        <input type="email" className="form-control" aria-describedby="emailHelp" />
		    </div>
		    <div className="form-group">
		        <label htmlFor="message">Message</label>
		        <textarea className="form-control" rows="5"></textarea>
		    </div>
		    <button type="submit" className="btn btn-primary">Submit</button>
		</form>
    </div>
    </section>
    <Footer />  
    </div>
  );
}

export default Contact;
