import React from 'react';
import bannerImg from './images/banner.jpg';


const Journal = () => {
    return(
<>
<div className="bannerArea" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="container">
                    <h1>Blog Posts</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in <br />tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                     
                </div>
            </div>
</>

    )
}

export default Journal;