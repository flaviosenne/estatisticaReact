import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './routes'

ReactDOM.render(
    <>
    <Navbar />
    <Routes />
    <Footer />
     </>,
     document.getElementById('app')
);

