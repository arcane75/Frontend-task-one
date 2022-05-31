import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Row className="banner">
                <Col sm={7} md={7} xs={7}>

                    <div>
                        <div className="banner-heading">
                            <h2>Here will be a Title</h2>
                        </div>
                        <div className="banner-subheading" >
                            <h4>Here will be a text</h4>
                        </div>
                    </div>
                </Col>

                <Col sm={5} md={5} xs={5}>

                    <div className="banner-artwork">
                        <h4 >Artwork for title 1</h4>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;