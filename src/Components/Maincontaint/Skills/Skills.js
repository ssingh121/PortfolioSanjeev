import React from 'react';
import "./Skills.css";

import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJava,
  SiHeroku,
  SiExpress,
  SiWindowsxp,
} from "react-icons/si";


class Skills extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='Skills'>
              <></>
              <div className='s-title'><h1>Proffesional Skillset</h1></div>
              <div className='s-icons' style={{ justifyContent: "center", paddingBottom: "50px" }}>
                  <div className="tech-icons">
                  <a href='https://www.java.com/en/'><SiJava /></a>  
                  </div>
                  <div className="tech-icons">
                   <a href='https://www.javascript.com/'><DiJavascript1 /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://nodejs.org/en/'><DiNodejs /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://reactjs.org/'><DiReact /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://www.mongodb.com/'><DiMongodb /></a>
                  </div>
                </div>
                <div className='s-icons' style={{ justifyContent: "center", paddingBottom: "50px" }}>
                  <div className="tech-icons">
                    <a href='https://cplusplus.com/doc/tutorial/'><CgCPlusPlus /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://getbootstrap.com/'><DiBootstrap /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://expressjs.com/'><SiExpress /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://github.com/'><DiGithubBadge /></a>
                  </div>                  
                  <div className="tech-icons">
                    <a href='https://www.python.org/'><DiPython /></a>
                  </div>                  
                </div>
                <div className='s-title'><h1>tools I use</h1></div>
                <div className='s-icons' style={{ justifyContent: "center", paddingBottom: "50px" }}>
                  <div className="tech-icons">
                    <a href='https://www.microsoft.com/en-in/windows/?r=1'><SiWindowsxp /></a>
                  </div>                 
                  <div className="tech-icons">
                    <a href='https://code.visualstudio.com/'><SiVisualstudiocode /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://git-scm.com/'><DiGit /></a>
                  </div>
                  <div className="tech-icons">
                    <a href='https://www.heroku.com/'><SiHeroku /></a>
                  </div>                  
                  <div className="tech-icons">
                    <a href='https://www.linux.org/'><SiLinux /></a>
                  </div>
                </div>
            </div>
        );
    }
}
 
export default Skills;
