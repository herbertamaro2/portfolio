import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import WebsiteImg from '../../assets/img/website.svg';
import EcommerceImg from '../../assets/img/ecommerce.svg';
import LogomarcaImg from '../../assets/img/logomarca.svg';
import { FaRss, FaFire, FaBook, FaCode, FaPaintBrush, FaIdCard } from 'react-icons/fa';

import './style.css';

function Services() {
  return (
    <div className="App">
    <Header />
    <section className="content content-services py-5 px-5">
    <h1>Services</h1>
    <div class="content-block">
		<ul className="row m-0 text-center align-content-center justify-content-center">
			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<img src={WebsiteImg} />
				</div>
				<h2>Development of Websites</h2>
				<p>Full Professional websites, from layout to end of project</p>
			</li>

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<img src={EcommerceImg} />
				</div>
				<h2>Ecommerce</h2>
				<p>We create professionals stores that sell</p>
			</li>


			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaRss />
				</div>
				<h2>Blogs</h2>
				<p>Creation of blogs of different types.</p>
			</li>	

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaFire />
				</div>
				<h2>Hotsites</h2>
				<p>Experience in creating promotional sites.</p>
			</li>

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<img src={LogomarcaImg} />
				</div>
				<h2>Logotype</h2>
				<p>Visual Identity Creation and Reformulation</p>
			</li>


			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaBook />
				</div>
				<h2>Midia Kit</h2>
				<p>Creation of online campaign for blog, and digital media.</p>
			</li>
			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaCode />
				</div>
				<h2>Frontend</h2>
				<p>Frontend development using the most modern technologies</p>
			</li>

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaPaintBrush />
				</div>
				<h2>Layouts for Web</h2>
				<p>We created the layout for your website, webapp, from scratch, my friend!</p>
			</li>


			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaIdCard />
				</div>
				<h2>Papers</h2>
				<p>Creation of print media</p>
			</li>	

			
		</ul>
    </div>
    </section>
    <Footer />  
    </div>
  );
}

export default Services;
