import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './versatile.css';
const BannerAd = () => {
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
                            <h3>BANNER AD</h3>
                        </div>
                        <div className="versatile-subheading" >
                            <h5>This is one of the most popular ads. After user’s click, this
                                ad opens landing page in behind. So, the user experience is
                                not hampered much.</h5>
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

export default BannerAd;