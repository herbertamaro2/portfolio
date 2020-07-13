import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import DevelopmentImg from '../../assets/img/development.svg';
import './style.css';
import { FaHtml5, FaCss3, FaBootstrap, FaJsSquare, FaNodeJs, FaReact, FaVuejs, FaGit, FaPhp, FaLaravel, FaWordpress, FaAdobe } from 'react-icons/fa';

function Home() {
  return (
    <div className="App">
    <Header />
    <section className="content content-about py-5 px-5">
    <h4>Frontend Developer</h4>
     
    <h1>HERBERT AMARO SANTANA</h1>
        <p className="mx-5 px-5">
          Web Developer, I work in the creation and development environment. 24, native of Itaquaquecetuba / SP, has experience in frontend and web designer, as well as working in the digital environment as interface designer for websites, branding, mobile applications and social networks. Creative and active, I am always looking for new knowledge to attend to the rapid changes of the market, the internet advance and its social networks, with the purpose of increasing sales of my clients and strengthening their brand in the digital environment.
        </p>
        <ul className="techno-list list-inline">
        <li className="list-inline-item"><FaHtml5 /></li>
        <li className="list-inline-item"><FaCss3 /></li>
        <li className="list-inline-item"><FaBootstrap /></li>
        <li className="list-inline-item"><FaJsSquare /></li>
        <li className="list-inline-item"><FaNodeJs /></li>
        <li className="list-inline-item"><FaReact /></li>
        <li className="list-inline-item"><FaVuejs /></li>
        <li className="list-inline-item"><FaGit /></li>
        <li className="list-inline-item"><FaPhp /></li>
        <li className="list-inline-item"><FaLaravel /></li>
        <li className="list-inline-item"><FaWordpress /></li>
        <li className="list-inline-item"><FaAdobe /></li>
        </ul>
        
        
        
    </section>
    <Footer />  
    </div>
  );
}

export default Home;
