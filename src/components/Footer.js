import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailChin from './MailChin';
import logo from '../assets/img/file.svg';
import navIcone1 from '../assets/img/nav-icon1.svg';
import navIcone2 from '../assets/img/nav-icon2.svg';
import navIcone3 from '../assets/img/nav-icon3.svg';
// import { MailChin } from './MailChin';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className='align-items-center'>
                    <MailChin />
                    <Col size={12} sm={6}>
                        <img className='w-50' src={logo} alt='logo'/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a><img src={navIcone1} /></a>
                            <a><img src={navIcone2} /></a>
                            <a><img src={navIcone3} /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved By Ahmed El-Ged</p>
                        
                    </Col>
                </Row>
            </Container>
            
        </footer>
    );
}

export default Footer;
