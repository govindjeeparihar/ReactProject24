import React, { useState, useEffect } from 'react';

import bannerImg from './images/banner.jpg';
import aboutImg from './images/about.jpg';

import axios from 'axios';

const Home = () => {

    const [works, setWorks] = useState([])

    useEffect(() => {
        axios.get('http://www.mocky.io/v2/5ed68221340000480106dae9')
            .then((resp) => {
                setWorks(
                    resp.data.slice(0, 6)
                )
            })
    })

    return (
        <>
            <div className="bannerArea" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="container">
                    <h1>Mighty Web Design Agency</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in <br />tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                    <a href="#" className="btn">Contact Us</a>
                </div>
            </div>


            <div className="site-section">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h2 className="h4 mb-4">About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptatem mollitia obcaecati quod maxime. Soluta libero eligendi voluptatum, natus debitis.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quasi!</p>
                            <p><a href="#" className="btn btn-primary text-white px-5">Our works</a></p>
                        </div>
                        <div className="col-md-4">
                            <img src={aboutImg} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <h2 className="h4 mb-4">Our expertise and skills</h2>
                            <div className="progress-wrap mb-4">
                                <div className="d-flex">
                                    <span>React JS</span>
                                    <span className="ml-auto">50%</span>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-Rjs"></div>
                                </div>
                            </div>
                            <div className="progress-wrap mb-4">
                                <div className="d-flex">
                                    <span>JavaScript</span>
                                    <span className="ml-auto">60%</span>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-Js"></div>
                                </div>
                            </div>
                            <div className="progress-wrap mb-4">
                                <div className="d-flex">
                                    <span>Bootstrap</span>
                                    <span className="ml-auto">93%</span>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-Bt"></div>
                                </div>
                            </div>
                            <div className="progress-wrap mb-4">
                                <div className="d-flex">
                                    <span>jQuery</span>
                                    <span className="ml-auto">80%</span>
                                </div>
                                <div className="progress rounded-0">
                                    <div className="progress-Jq"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section bg-light">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-7 mx-auto text-center">
                            <h2 className="heading">Our Services</h2>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-md-6 col-lg-3">
                            <div className="service text-center">
                                <span className="d-block wrap-icon">
                                    <span className="fa fa-desktop"></span>
                                </span>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="service text-center">
                                <span className="d-block wrap-icon">
                                    <span className="fa fa-desktop"></span>
                                </span>
                                <h3>Graphic Design</h3>
                                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="service text-center">
                                <span className="d-block wrap-icon">
                                    <span className="fa fa-desktop"></span>
                                </span>
                                <h3>Web Apps</h3>
                                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="service text-center">
                                <span className="d-block wrap-icon">
                                    <span className="fa fa-desktop"></span>
                                </span>
                                <h3>Ecommerce</h3>
                                <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="site-section">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-7 mx-auto text-center">
                            <h2 className="heading">Our Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            works.map((item, i) =>

                                <div className="col-md-6 col-lg-4 mb-4" key={i}>
                                    <div className="item-web">
                                        <a href="/" className="item-wrap">

                                            <img className="w-100" src={item.imgSrc} />
                                        </a>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>



            <div className="site-section bg-light">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-7 mx-auto text-center">
                            <h2 className="heading">Testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="person-pic mb-4">
                                    <img src="https://joeschmoe.io/api/v1/One" alt="Image" className="img-fluid" />
                                </div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi accusantium non aut perspiciatis nisi magni libero, molestias.</p>
                                </blockquote>
                                <p>— Chris Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="person-pic mb-4">
                                    <img src="https://joeschmoe.io/api/v1/Two" alt="Image" className="img-fluid" />
                                </div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi accusantium non aut perspiciatis nisi magni libero, molestias.</p>
                                </blockquote>
                                <p>— Chris Smith</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className="person-pic mb-4">
                                    <img src="https://joeschmoe.io/api/v1/Three" alt="Image" className="img-fluid" />
                                </div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi accusantium non aut perspiciatis nisi magni libero, molestias.</p>
                                </blockquote>
                                <p>— Chris Smith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>

    )
}

export default Home;