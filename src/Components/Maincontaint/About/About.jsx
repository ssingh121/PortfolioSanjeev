import React from 'react';
import './About.css';

import aboutlogo from '../../Assets/about.png';

class About extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='about'>

                <div className='a-left'>
                    <div className='detailss'>
                    <span>Hi Everyone, I am</span> 
                    <span style={{color:"grey"}}> Sanjeev Singh </span>
                    <span>from</span>
                    <span style={{color:"grey"}}> Kanpur, India.</span>
                    <br />
                    <br />
                    I am pre-final year student of B.tech in Information technology from UIET Kanpur.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!

                    <ul>
                        <li > Playing Games like chess </li>
                        <li > Writting Tech Blogs </li>
                        <li > Travelling and videography </li>
                    </ul>
                    </div>
                </div>

                <div className='a-right'>
                    <img
                        src={aboutlogo}
                        alt="about pic"
                        className="img-fluid"
                        style={{ maxHeight: "400px" }}
                    />
                </div>
            </div>
        );
    }
}
 
export default About;