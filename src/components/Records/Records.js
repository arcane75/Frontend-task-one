import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Records.css';

const Records = () => {
    return (

        <Row xs={1} md={3} className="g-4 record-margin">

            <Col className="record align">
                <div className="record-border blue align">
                    <div className="align">
                        <div className="blue">
                            <h1>1 BN+</h1>
                            <br />
                            <h4 >Daily Impressions</h4>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className="record align">
                <div className="record-border align">
                    <div className="align">
                        <div className="white">
                            <h1>$500K+</h1>
                            <br />
                            <h4>Paid</h4>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className="record align">
                <div className="record-border orange align">
                    <div className="align">
                        <div className="orange">
                            <h1>8K+</h1>
                            <br />
                            <h4 >Global Publishers</h4>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Records;