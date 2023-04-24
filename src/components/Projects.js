import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/fitclub-ehl.pages.dev_ (7).png';
import projImg3 from '../assets/img/project-img3.png';

const Projects = () => {
    const projects = [
        {
            title: "Amazon-Clone",
            description: "Design and Development By Reactjs",
            imgUrl: projImg1,
        },
        {
            title: "FitClub",
            description: "Fitness Website By Reacts",
            imgUrl: projImg2,
        },
        {
            title: "Portfolio",
            description: "Design and Development",
            imgUrl: projImg3,
        },

    ]
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>I like working with people who are different in nature because I want to get to know them so I always try to learn different cultures</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-centre ' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tap One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tap two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tap Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>{projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project} />
                                        )
                                    })}
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>Lorem Ipsam</Tab.Pane>
                                <Tab.Pane eventKey='third'>Lorem Ipsam</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} />
        </section >
    );
}

export default Projects;
