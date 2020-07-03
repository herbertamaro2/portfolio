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
	<p>My Habilities</p>
    <div class="content-block">
		<ul className="row m-0 text-center align-content-center justify-content-center">
			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<img src={WebsiteImg} />
				</div>
				<h2>Development of Websites</h2>
				<p>Websites profissionais, do layout a finalização</p>
			</li>

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<img src={EcommerceImg} />
				</div>
				<h2>Ecommerce</h2>
				<p>Websites profissionais, do layout a finalização</p>
			</li>


			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaRss />
				</div>
				<h2>Blogs</h2>
				<p>Criação de blogs de diversos tipos.</p>
			</li>	

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaFire />
				</div>
				<h2>Hotsites</h2>
				<p>Experiência em criação de sites promocionais.</p>
			</li>

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<img src={LogomarcaImg} />
				</div>
				<h2>Logomarcas</h2>
				<p>Criação e Reformulação de Identidade Visual</p>
			</li>


			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaBook />
				</div>
				<h2>Midia Kit</h2>
				<p>Criação de campanha online para blog, e midias digitais.</p>
			</li>
			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaCode />
				</div>
				<h2>Frontend</h2>
				<p>Desenvolvimento Frontend utilizando as mais modernas tecnologias</p>
			</li>

			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaPaintBrush />
				</div>
				<h2>Layouts for Web</h2>
				<p>Criamos o layout para seu site,webapp, do zero, meu amigo!</p>
			</li>


			<li className="service pb-3 col-2 col-md-2 col-xs-12">
				<div className="icon">
					<FaIdCard />
				</div>
				<h2>Papelaria</h2>
				<p>Criação de Mídias Impressas</p>
			</li>	

			
		</ul>
    </div>
    </section>
    <Footer />  
    </div>
  );
}

export default Services;
