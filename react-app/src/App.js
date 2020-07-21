import React  from 'react';
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Body from "./containers/Body";
import Button from 'react-bootstrap/Button';
import './App.css';

const app = () => {
    return(
        <div className='doc-bot-app'>
            <Header/>
            <Body/>
            <Footer/>
            <Button variant="primary">Primary</Button>
        </div>
    );
}

export default app;
