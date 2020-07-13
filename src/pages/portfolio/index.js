import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Websites from './category/websites';
import Identify from './category/identify';
import './style.css';

function Portfolio() {
  return (
    <div className="App">
    <Header />
    <section className="content content-portfolio py-5 px-5">
    <h1>Portfolio</h1>

    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
	  <Tab eventKey="home" title="Websites and Ecommerce">
	    <Websites />
	  </Tab>
	  <Tab eventKey="profile" title="Graphic Design">
	    <Identify />
	  </Tab>
	</Tabs>
    </section>
    <Footer />  
    </div>
  );
}

export default Portfolio;
