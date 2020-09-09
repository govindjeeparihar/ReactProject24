import React, { useState, useEffect } from 'react';
import bannerImg from './images/banner.jpg';


const About = () => {

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then((resp) => {
                resp.json().then((result) => {
                    setProject(
                        result.slice(14, 20)
                    )
                })
            })
    })

    return (
        <>
            <div className="bannerArea" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="container">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in <br />tenetur doloremque, maiores doloribus officia iste. Dolores.</p>

                </div>
            </div>



            <div className="site-section">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-7 mx-auto text-center">
                            <h2 className="heading">Selected Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            project.map((item, i) =>

                                <div className="col-md-6 col-lg-4 mb-4" key={i}>
                                    <div className="item-web">
                                        <a href="/" className="item-wrap">

                                            <img className="w-100" src={item.download_url} />
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
                                <blockquote className="quote_39823">
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
                                <blockquote className="quote_39823">
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
                                <blockquote className="quote_39823">
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

export default About;