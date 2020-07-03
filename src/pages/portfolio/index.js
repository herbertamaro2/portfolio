import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Websites from './category/websites';
import Identify from './category/identify';
import SocialMedia from './category/socialmedia';
import './style.css';

function Portfolio() {
  return (
    <div className="App">
    <Header />
    <section className="content content-portfolio py-5 px-5">
    <h1>Portfolio</h1>

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
	  <Tab eventKey="home" title="Websites and Ecommerce">
	    <Websites />
	  </Tab>
	  <Tab eventKey="profile" title="Identify Visual">
	    <Identify />
	  </Tab>
	  <Tab eventKey="contact" title="Social Media">
	   	<SocialMedia />
	  </Tab>
	</Tabs>
    </section>
    <Footer />  
    </div>
  );
}

export default Portfolio;
