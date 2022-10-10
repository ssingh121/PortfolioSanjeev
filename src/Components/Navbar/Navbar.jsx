import React from 'react';
import './Navbar.css';
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='n-wrapper'>
                <div className='n-left'>
                    <div className='n-name'>
                        <Link to="/">Sanjeev</Link>
                    </div>
                </div>
                <div className='n-right'>
                    <div className='n-list'>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/certificates">Certificates</Link>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;