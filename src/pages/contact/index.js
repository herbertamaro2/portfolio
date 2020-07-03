import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import ContactImg from '../../assets/img/contact.svg';
import './style.css';

function Contact() {
  return (
    <div className="App">
    <Header />
    <section className="content content-contact py-5 px-5">
    <h1>Contact</h1>
    <div className="content-page">
    	<div className="row m-0">
    	<div className="col-6 col-xs-12">
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
		<div className="col-6 col-xs-12">
			<img src={ContactImg} />
		</div>
		</div>

    </div>
    </section>
    <Footer />  
    </div>
  );
}

export default Contact;
