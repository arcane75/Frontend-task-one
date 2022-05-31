import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './AvailableForEveryOne.css';
import img1 from '../../assets/images/arrow.png';
import img2 from '../../assets/images/net.png';
import img3 from '../../assets/images/sound.png';

const AvailableForEveryOne = () => {
    return (
        <div>
            <Row>
                <div className="available">
                    <h2 >AVAILABLE FOR EVERYONE</h2>
                    <h4 >Here Will be a text</h4>
                </div>
            </Row>
            <Container>
                <Row xs={1} md={3} className="g-4 everyone">

                    <Col >
                        <div className="image-border align">
                            <div className="image align">
                                <img alt='' src={img1} />
                            </div>
                        </div>
                        <div className="align everyone-text">
                            <h5>Text 1</h5>
                        </div>

                        <div className="align">
                            <Button className="everyone-btn">Hello 1</Button>
                        </div>

                    </Col>

                    <Col >
                        <div className="image-border align">
                            <div className="image align">
                                <img alt='' src={img2} />
                            </div>
                        </div>
                        <div className="align everyone-text">
                            <h5>Text 2</h5>
                        </div>

                        <div className="align">
                            <Button className="everyone-btn">Hello 2</Button>
                        </div>
                    </Col>

                    <Col >
                        <div className="image-border align">
                            <div className="image align">
                                <img alt='' src={img3} />
                            </div>
                        </div>
                        <div className="align everyone-text">
                            <h5>Text 3</h5>
                        </div>

                        <div className="align">
                            <Button className="everyone-btn">Hello 3</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AvailableForEveryOne;