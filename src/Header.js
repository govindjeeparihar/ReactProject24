import React from 'react';
import './css/Header.css';
import Logo from './Logo';
import Navigation from './Navigation';


const Header = () => {

    return (
        <>
            <header>

                <div className="container">
                    <div className="row">
                        <div className="col-3 ">
                            <Logo />
                        </div>
                        <div className="col-9  text-right">
                            <Navigation />

                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header;