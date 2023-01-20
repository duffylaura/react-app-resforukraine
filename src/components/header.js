import React from 'react';
//import Navigation from './nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Brand from '../assets/brand.png';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <Container>
            <Row>
                <img src={Brand} alt="Brand" className="nav-brand"/>
                <Button className="custom-button"> Home </Button>
            </Row>
        </Container>
    )
};

export default Header; 