import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";
import './Slider.css';

const Slider = () => {
    return (
        <div className="carousel">
            <Container>
                <Carousel
                    autoPlay
                    showIndicators={false}
                    showThumbs={false}
                    dynamicHeight={true}
                    infiniteLoop={true}
                    showStatus={false}
                    >
                       
                    <div>
                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 2 }).map((_, idx) => (
                                <Col>
                                    <Card className='card-style'>
                                        <Card.Body>
                                            <Row>
                                                <Col md={5}>
                                                    <Card.Img height="180px" width="100%" src="https://i.ibb.co/KDQ4T4s/TV-Repair-Services.png" />
                                                </Col>
                                                <Col md={7}>
                                                    <Card.Title>Title</Card.Title>
                                                    <Card.Text>
                                                        Hello, Here will be a text
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div>
                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 2 }).map((_, idx) => (
                                <Col>
                                    <Card  className='card-style'>
                                        <Card.Body>
                                            <Row>
                                                <Col md={5}>
                                                    <Card.Img height="180px" src="https://i.ibb.co/tqkr8B1/paint.jpg" />
                                                </Col>
                                                <Col md={7}>
                                                    <Card.Title>Title</Card.Title>
                                                    <Card.Text>
                                                        Hello, Here will be a text
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Carousel>
            </Container>
        </div>
    );
};

export default Slider;