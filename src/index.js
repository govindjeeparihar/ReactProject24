import React from 'react';
import ReactDOM from 'react-dom';
import './css/Style.css';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import Work from './Work';
import Journal from './Journal';
import Contact from './Contact';


import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    <>

        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Work" component={Work} />
                <Route path="/Journal" component={Journal} />
                <Route path="/Contact" component={Contact} />
            </Switch>

            <Footer />
        </BrowserRouter>

    </>
    , document.getElementById('root'));

