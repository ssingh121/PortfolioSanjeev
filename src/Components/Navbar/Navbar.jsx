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

                    <Link to="/" className='n-items'>Home</Link>
                    <Link to="/about" className='n-items'>About</Link>
                    <Link to="/skills" className='n-items'>Skills</Link>
                    <Link to="/projects" className='n-items'>Projects</Link>
                    <Link to="/certificates" className='n-items'>Certificates</Link>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;