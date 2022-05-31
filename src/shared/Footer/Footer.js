import React from 'react';
import './Footer.css';
import icon from '../../assets/images/icoon.png';

const Footer = () => {
    return (
        <div className="d-flex flex-column h-100">
            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h4 className="h4 mb-3 blue-text ">We are social</h4>
                            <p className="h4  mb-3">FOLLOW US</p>
                            <img className=" mb-5" alt='' src={icon} />
                            <h3 className="h3 ">LOGO</h3>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className=" mb-3 blue-text">Links</h5>
                            <ul className="list-unstyled link">
                                <li><a href="">ADVERTISERS</a></li>
                                <li><a href="">PUBLISHERS</a></li>
                                <li><a href="">INFLUENCERS</a></li>
                                <li><a href="">AD FORMATS</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className=" mb-3 blue-text">Documentation</h5>
                            <ul className="list-unstyled link">
                                <li><a href="">TERMS & CONDITIONS</a></li>
                                <li><a href="">PRIVACY POLICY </a></li>
                                <li><a href="">CANCELLATION POLICY</a></li>
                                <li><a href="">BLOG</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="mb-3 blue-text">Support</h5>
                            <ul className="list-unstyled support">
                                <li><a href="">FAQ</a></li>
                                <li><a href="">MEDIA KIT</a></li>
                                <li><a href="">CONTACT US</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;