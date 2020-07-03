import React from 'react';
import Header from '../../pages/template/header';
import Footer from '../../pages/template/footer';
import './style.css';

function AboutPage() {
  return (
    <div className="App">
    <Header />
    <section className="content content-about py-5 px-5">
    <h4>Frontend Developer</h4>
    <h1>About HERBERT AMARO SANTANA</h1>
        <p class="mx-5 px-3">
          Web Developer, I work in the creation and development environment. 24, native of Itaquaquecetuba / SP, has experience in frontend and web designer, as well as working in the digital environment as interface designer for websites, branding, mobile applications and social networks. Creative and active, I am always looking for new knowledge to attend to the rapid changes of the market, the internet advance and its social networks, with the purpose of increasing sales of my clients and strengthening their brand in the digital environment.
        </p>
        
    </section>
    <Footer />  
    </div>
  );
}

export default AboutPage;
