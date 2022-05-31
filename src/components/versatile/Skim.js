import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './versatile.css';

const Skim = () => {
    return (
        <Container>
            <Row className="ad-format">
                <Col sm={6} md={5.5} xs={5}>
                    <div className="versatile-adFormate">

                        {/* <img alt='' src='' /> */}

                        <h4 >Artwork for title
                            <br />
                            <br />
                            Explanation graphics of ad format
                        </h4>
                    </div>
                </Col>

                <Col sm={6} md={6.5} xs={7}>

                    <div className='banner-text-versatile'>
                        <div className="versatile-heading">
                            <h3>SKIM</h3>
                        </div>
                        <div className="versatile-subheading" >
                            <h5>SKIM" is a link that a publisher inserts on a specific site
                                element, and after clicking on it, an advertisement appears
                                to the user.
                                SKIM gives 100% control of your sold traffic amount, higher
                                CR to advertisers and CPM rates to publishers.</h5>
                        </div>
                    </div>
                    <div className="learn-more" >
                        <Link className="learn-more-link" to=''>Learn more</Link>
                    </div>
                </Col>

            </Row>



        </Container>
    );
};

export default Skim;