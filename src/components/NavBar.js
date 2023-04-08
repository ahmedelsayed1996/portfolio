import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcone1 from '../assets/img/nav-icon1.svg';
import navIcone2 from '../assets/img/nav-icon2.svg';
import navIcone3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/file.svg';


function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setscrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setscrolled(true)
            } else {
                setscrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/ahmed-saied-528348198/'><img src={navIcone1} alt="" /></a>
                            <a href='#'><img src={navIcone2} alt="" /></a>
                            <a href='#'><img src={navIcone3} alt="" /></a>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/ahmed-saied-528348198/"
                            target="_blank"
                            rel="noreferrer">
                            <button className='vvd' onClick={() => console.log("connect")}>Let's Connect</button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;