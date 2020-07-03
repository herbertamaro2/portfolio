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
    </section>
    <Footer />  
    </div>
  );
}

export default Contact;
