import React from 'react';
import "./Certificates.css";

import mernc from "../../Assets/certificate_mern_udemy.pdf";
import codechefc from "../../Assets/certificate_SNCK1A2_codechef.pdf";
import tcsc from "../../Assets/certificate_communication_tcs.pdf"
import tsfc from "../../Assets/certificate_intern_sparksfoundation.pdf";
import unic from "../../Assets/certificate_intern_unicompiler.pdf";
import resc from "../../Assets/Sanjeev's Resume.pdf";

import mernl from "../../Assets/u-logo.png";
import codechefl from "../../Assets/c-logo.png";
import tcsl from "../../Assets/tcs.png";
import tsfl from "../../Assets/tsf.png";
import unil from "../../Assets/UNIcompiler.jfif";
import resl from "../../Assets/resume.jpg";


class Certificates extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='Certificates'>

            <div className='c-title'><h2>@@ My_Online_Certificates @@</h2></div>
                
            <div className='c-row'>


            <div className="c-col">
            <div className="c-cards">

                <div className='c-left'>  
                    <img src={resl} alt="Avatar" className='c-img'/>
                </div>

                <div className='c-right'>
                    <div className="c-section">
                    <h3>My_Resume</h3>
                    </div>
                    <div className='w3-section'>
                    <h5>In this resume I have show some of my achivement till date.. I am excited to come across the full stack web devloper intern position.. as I have done two internship as a web devloper intern.</h5>
                    </div>
                    
                    <div className="c-section">
                        <a href={resc} className="p-button" download={resc}>Download</a>
                        <a href={resc} className="p-button"  target="_blank" rel="noreferrer">View</a>
                    </div>
                </div>
                
            </div>
            </div>



            <div className="c-col">
            <div className="c-cards">

                <div className='c-left'>  
                    <img src={tsfl} alt="Avatar" className='c-img'/>
                </div>

                <div className='c-right'>
                    <div className="c-section">
                    <h3>The_Sparks_Foundation_intern</h3>
                    </div>
                    <div className='w3-section'>
                    <h5>This is full stack web devlopment virtual internship. In this internship I have done two projects using MERN technolgy like nodejs,mongodb,express etc.</h5>
                    </div>
                    
                    <div className="c-section">
                        <a href={tsfc} className="p-button" download={tsfc}>Download</a>
                        <a href={tsfc} className="p-button" target="_blank" rel="noreferrer">View</a>
                    </div>
                </div>
                
            </div>
            </div>


            <div className="c-col">
            <div className="c-cards">

                <div className='c-left'>  
                    <img src={unil} alt="Avatar" className='c-img'/>
                </div>

                <div className='c-right'>
                    <div className="c-section">
                    <h3>UNIcompiler_web_dev_intern</h3>
                    </div>
                    <div className='w3-section'>
                    <h5>This is frontend web devlopment virtual internship. In this internship I have done two projects using technolgies like html css javascript bootstrap etc..</h5>
                    </div>
                    
                    <div className="c-section">
                        <a href={unic} className="p-button" download={unic}>Download</a>
                        <a href={unic} className="p-button" target="_blank" rel="noreferrer">View</a>
                    </div>
                </div>
                
            </div>
            </div>


            <div className="c-col">
            <div className="c-cards">

                <div className='c-left'>  
                    <img src={mernl} alt="Avatar" className='c-img'/>
                </div>

                <div className='c-right'>
                    <div className="c-section">
                    <h3>Udemy_Full_Web_Dev_Certificate</h3>
                    </div>
                    <div className='w3-section'>
                    <h5>This certificate above verifies that Sanjeev Kumar Singh successfully completed the course The Complete 2022 Web Development Bootcamp on 06/01/2022 as taught by Dr. Angela Yu on Udemy. </h5>
                    </div>
                    
                    <div className="c-section">
                        <a href={mernc} className="p-button" download={mernc}>Download</a>
                        <a href={mernc} className="p-button" target="_blank" rel="noreferrer">View</a>
                    </div>
                </div>
                
            </div>
            </div>


            <div className="c-col">
            <div className="c-cards">

                <div className='c-left'>  
                    <img src={tcsl} alt="Avatar" className='c-img'/>
                </div>

                <div className='c-right'>
                    <div className="c-section">
                    <h3>tcs_communication_certificate</h3>
                    </div>
                    <div className='w3-section'>
                    <h5>In this course I learnt and understand what communication is and why we communicate. I had also understand non-verbal communication in detail.</h5>
                    </div>
                    
                    <div className="c-section">
                        <a href={tcsc} className="p-button" download={tcsc}>Download</a>
                        <a href={tcsc} className="p-button" target="_blank" rel="noreferrer">View</a>
                    </div>
                </div>
                
            </div>
            </div>


            <div className="c-col">
            <div className="c-cards">

                <div className='c-left'>  
                    <img src={codechefl} alt="Avatar" className='c-img'/>
                </div>

                <div className='c-right'>
                    <div className="c-section">
                    <h3>CodeChef_SnackDown_Certificate</h3>
                    </div>
                    <div className='w3-section'>
                    <h5>Apart from devlopment, I have also participitaed in many competitive programming contests..in which i have achived many goals..I am 3star coder at codechef..</h5>
                    </div>
                    
                    <div className="c-section">
                        <a href={codechefc} className="p-button" download={codechefc}>Download</a>
                        <a href={codechefc} className="p-button"  target="_blank" rel="noreferrer">View</a>
                    </div>
                </div>
                
            </div>
            </div>

            
        </div>
        </div>
        );
    }
}
 
export default Certificates;