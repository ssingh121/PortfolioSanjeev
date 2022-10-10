import React from 'react';
import './Home.css';

import homeLogo from "../../Assets/home-main.svg";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";

import bgvideo from "../../Assets/bg-video2.mp4";


class Home extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='home'> 

            <video autoPlay muted loop id="myVideo">
                <source src={bgvideo} type="video/mp4" />
            </video>  

            <div className='content'>          
                <div className='i-left'>

                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Sanjeev singh</span>
                    <span>I am a web devloper but i am also intrested in competetive programming.</span>
                </div>

                <button onClick={() => window.location = 'mailto:sanjeevsinghkaushik662@gmail.com'} className='button i-button'>hire me</button>

                <div className='i-icons'>
                    <a href='https://github.com/sanjeev662'><img src={github} alt="github" /></a>                    
                    <a href='https://www.linkedin.com/in/sanjeev662/'><img src={linkedin} alt="linkedin" /></a>
                    <a href='https://www.instagram.com/'><img src={instagram} alt="instagram" /></a>                   
                </div>

                </div>

                <div className='i-right'>
                    <img
                        src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                </div>                
            </div>
            </div>
        );
    }
}
 
export default Home;

