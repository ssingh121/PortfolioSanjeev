import React from 'react';
import './Footer.css';

import {
    SiLinkedin,
    SiGithub,
    SiInstagram,
  } from "react-icons/si";

class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='footer'>
                <div className='col'>
                <h3>Designed and Developed by Sanjeev Singh</h3>
                </div>
                <div className='col'>
                <h3 className='f-footer'>Copyright © 2022 SS</h3>
                </div>
                <div className='col'>
                <div className='f-icons'>
                    <a href='https://github.com/sanjeev662' className='f-each-icons'><SiGithub /></a>                    
                    <a href='https://www.linkedin.com/in/sanjeev662/' className='f-each-icons'><SiLinkedin /></a>
                    <a href='https://www.instagram.com/' className='f-each-icons'><SiInstagram /></a>                   
                </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;