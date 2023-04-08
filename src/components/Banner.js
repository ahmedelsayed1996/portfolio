import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { useNavigate } from "react-router-dom";

const Banner = () => {
    // let navigate = useNavigate();
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'UI/UX Designer', 'Front-End Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeleting) {
            setDelta(prevDelte => prevDelte / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__bounce":""}>
                                <span className='tagline'>Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Ahmed Elsayed`} <span className='wrap'>{text}</span></h1>
                                <p>Seeking a challenging and creative position in a reputable or fast growing enviroment where i can utilize my background knowledge in the field of Front-End web development using HTML5 & CSS3 & Bootstrap & RWD & JavaScript and PHP & Wordpress and develop or enhance my knowledge in the field of Web Development while contributing to the company's growth .<br />
                                    I like working with people who are different in nature because I want to get to know them so I always try to learn different cultures</p>
                                    <a
                            href="https://www.linkedin.com/in/ahmed-saied-528348198/"
                            target="_blank"
                            rel="noreferrer">
                            <button className='vvd' onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle size={25} /></button>
                        </a>
                                {/* <button  >Let's Connect <ArrowRightCircle size={25} /> </button> */}
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header img' />

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
