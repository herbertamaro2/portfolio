import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import AboutPage from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route path="/services" component={Services} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
        );
}