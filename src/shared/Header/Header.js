import React from 'react';
import { Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Row>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/">
                            {/* <img
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            /> */}
                            <h4 className="logo"> LOGO</h4>
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                BN / EN
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <Navbar collapseOnSelect expand="lg" variant="light">
                    <Container>
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="" className="navItem">HOME</Nav.Link>
                                <Nav.Link href="" className="navItem">ADVERTISERS</Nav.Link>
                                <Nav.Link href="" className="navItem">PUBLISHERS</Nav.Link>
                                <Nav.Link href="" className="navItem">INFLUENCERS</Nav.Link>
                                <Nav.Link href="" className="navItem">AD FORMATS</Nav.Link>
                                <Nav.Link href="" className="navItem">BLOG</Nav.Link>
                                <Nav.Link href="" className="navItem">CONTACT US</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Nav >
                            <Button className="login-btn">LOGIN <Button className="signUp-btn">SIGN UP</Button></Button>
                        </Nav>

                    </Container>
                </Navbar>
            </Row>
        </div>
    );
};

export default Header;