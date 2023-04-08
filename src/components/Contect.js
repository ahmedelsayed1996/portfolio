import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContectImg from '../assets/img/contact-img.svg'

const Contect = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [status, setStatus] = useState({});
    const [buttonText, setButtonText] = useState('send');

    const onFormUpdate = (category, value) => {
        setFormDetails({ ...formDetails, [category]: value })
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        setButtonText("sending...");let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          });
          setButtonText("Send");
          let result = await response.json();
          setFormDetails(formInitialDetails);
          if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully'});
          } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
          }
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-centre'>
                    <Col md={6}>
                        <img src={ContectImg} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handelSubmit}>
                            <Row>
                                <Col className='px-1' md={6}>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstname', e.target.value)} />
                                </Col>
                                <Col className='px-1' md={6}>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastname', e.target.value)} />
                                </Col>
                                <Col className='px-1' md={6}>
                                    <input type='email' value={formDetails.email} placeholder='Email Address....' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col className='px-1' md={6}>
                                    <input type='tel' value={formDetails.phone} placeholder='Mobile' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col className='px-1' md={6}>
                                    <textarea rows={6} value={formDetails.message} placeholder='Enter Your Message ..' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }

                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}

export default Contect;
