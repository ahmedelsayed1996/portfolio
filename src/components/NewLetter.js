import React, { useEffect, useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';

const NewLetter = ({onValidated,status,message}) => {
    const handelSubmit = (e)=>{
        e.preventDefault();
        email && email.indexOf("@") > -1 && onValidated({
            EMAIL:email
        })
    }
    useEffect(() => {
        if (status === 'success') ClearFileds();
        
    }, [status]);
    const ClearFileds =()=>{
        setEmail("");
    }
    const [email, setEmail] = useState('');
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to Our News letter</h3>
                        {status ==="sending"&& <Alert>Sending...</Alert>}
                        {status ==="error"&& <Alert variant='danger'>{message}</Alert>}
                        {status ==="success"&& <Alert variant='success'>{message}</Alert>}

                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handelSubmit}>
                            <div className='new-email-bx'>
                                <input type={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address'/>
                                <button type='submit'>Submit</button>
                            </div>

                        </form>

                    </Col>
                </Row>
            </div>
            
        </Col>
    );
}

export default NewLetter;
