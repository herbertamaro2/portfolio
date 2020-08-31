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
          Web Developer, 25 years, 8 years of experience. Brazilian living in Dublin, Ireland. I work in the creation and development systems, has experience in frontend and web designer, as well as working in the digital environment as interface designer for websites, branding, mobile applications and social networks. Creative and active, I am always looking for new knowledge to attend to the fast changes of the market, the internet advance and its social networks, with the purpose of increasing sales of my clients and strengthening their brand in the digital environment.
        </p>
        <ul className="techno-list list-inline">
        <li className="list-inline-item tooltip2"><FaHtml5 alt="Html 5" /> <span className="tooltiptext">HTML 5</span></li>
        <li className="list-inline-item tooltip2"><FaCss3 /> <span className="tooltiptext">CSS3</span></li>
        <li className="list-inline-item tooltip2"><FaBootstrap /><span className="tooltiptext">Bootstrap</span></li>
        <li className="list-inline-item tooltip2"><FaJsSquare /><span className="tooltiptext">Javascript</span></li>
        <li className="list-inline-item tooltip2"><FaNodeJs /><span className="tooltiptext">NodeJS</span></li>
        <li className="list-inline-item tooltip2"><FaReact /><span className="tooltiptext">ReactJS</span></li>
        <li className="list-inline-item tooltip2"><FaVuejs /><span className="tooltiptext">VueJS</span></li>
        <li className="list-inline-item tooltip2"><FaGit /><span className="tooltiptext">Git</span></li>
        <li className="list-inline-item tooltip2"><FaPhp /><span className="tooltiptext">PHP</span></li>
        <li className="list-inline-item tooltip2"><FaLaravel /><span className="tooltiptext">Laravel</span></li>
        <li className="list-inline-item tooltip2"><FaWordpress /><span className="tooltiptext">Wordpress</span></li>
        <li className="list-inline-item tooltip2"><FaAdobe /><span className="tooltiptext">Adobe</span></li>
        </ul>
        
        
        
    </section>
    <Footer />  
    </div>
  );
}

export default Home;
