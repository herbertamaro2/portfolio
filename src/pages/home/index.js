import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import DevelopmentImg from '../../assets/img/development.svg';
import './style.css';

function Home() {
  return (
    <div className="App">
    <Header />
    <section className="content content-home py-5 px-5">
    <div className="row m-0">
    <div className="col-6 col-xs-12">
    <img src={DevelopmentImg} /> 
    </div>
    <div className="col-6 text-left col-xs-12">
    <h4>Frontend Developer</h4>
    <h2>HERBERT AMARO SANTANA</h2>
        <p class="py-3">
          Web Developer, I work in the creation and development environment. 24, native of Itaquaquecetuba / SP, has experience in frontend and web designer, as well as working in the digital environment as interface designer for websites, branding, mobile applications and social networks. Creative and active, I am always looking for new knowledge to attend to the rapid changes of the market, the internet advance and its social networks, with the purpose of increasing sales of my clients and strengthening their brand in the digital environment.
        </p>
    </div>
    </div>
    </section>
    <Footer />  
    </div>
  );
}

export default Home;