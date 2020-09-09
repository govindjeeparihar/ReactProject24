import React from 'react';
import './css/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h4>About Me</h4> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        </div>
                        <div className="col-lg-8 ml-auto">
                            <div className="row">
                                <div className="col-lg-6 ml-auto">
                                    <h4>Quick Links</h4>         <ul className="list-unstyled">
                                        <li><NavLink to="/About">About</NavLink></li>
                                        <li><a href="/">Testimonials</a></li>
                                        <li><a href="/">Terms of Service</a></li>
                                        <li><a href="/">Privacy</a></li>
                                        <li><NavLink to="/Contact">Contact</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <h4>Connect</h4>         <div className="footer-social mb-5">
                                        <a href="/"><span className=" fa fa-facebook"></span></a>
                                        <a href="/"><span className="fa fa-instagram"></span></a>
                                        <a href="/"><span className="fa fa-twitter"></span></a>
                                    </div>
                                    <h4>Newsletter</h4>         <form action="#" className="d-flex">
                                        <input type="text" className="form-control mr-3" placeholder="Email" />
                                        <input type="submit" value="Send" className="btn btn-primary" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-5">
                                <p>

                                    Copyright © 2020 All rights reserved

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer;