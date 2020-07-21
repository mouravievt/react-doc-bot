import React  from 'react';
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Body from "./containers/Body";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

const app = () => {
    return(
        <div>
            <Container fluid bsPrefix='doc-bot-app'>
                <Row bsPrefix='doc-bot-header'>
                    <Header/>
                </Row>
                <Row bsPrefix='doc-bot-body'>
                    <Body/>
                </Row>
                <Row bsPrefix='doc-bot-footer'>
                    <Footer/>
                </Row>
            </Container>

        </div>
    );
}

export default app;
