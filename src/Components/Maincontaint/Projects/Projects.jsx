import React from 'react';
import './Projects.css';


import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

class Projects extends React.Component {
    state = {  } 
    render() { 
        return (
            <div classname="Projects">

            <div className='p-row'>
                <div className="p-col">
                <div className="p-cards">              
                    <h3>BankingSystem</h3>
                    <img src={editor} alt="Avatar" style={{ width: "30%" }} />
                    <h5>This is full stack Bank Management System with basic functinality like create account, remove account, edit details and login authantication are used...</h5>
                    <div className="w3-section">
                        <a href="https://github.com/sanjeev662/BankingSystem" className="p-button">GitHub</a>
                        <a href="https://bankingsystemsanjeev.herokuapp.com/" className="p-button">Demo</a>
                    </div>
                </div>
                </div>

                <div className="p-col">
                <div className="p-cards">
                    <h3>To-Do-List</h3>
                    <img src={chatify} alt="Avatar" style={{ width: "30%" }} />
                    <h5>My personal todo page build with Node.js and Css which takes the content from user and store it using mongoDB database Supports...</h5>
                    <div className="w3-section">
                        <a href="https://github.com/sanjeev662/ToDoList" className="p-button">GitHub</a>
                        <a href="https://todolistsanjeev.herokuapp.com/" className="p-button">Demo</a>
                    </div>
                </div>
                </div>

                <div className="p-col">
                <div className="p-cards">
                    <h3>ThankuGreetingCard</h3>
                    <img src={bitsOfCode} alt="Avatar" style={{ width: "30%" }} />
                    <h5>It's just a way, as a devloper to thank you my friends for my birthday wishes, only by putting there roll no. which is between 133 to 198.</h5>
                    <div className="w3-section">
                        <a href="https://github.com/sanjeev662/thankugreetingcard"  className="p-button">GitHub</a>
                        <a href="https://sanjeev662.github.io/thankugreetingcard/"  className="p-button">Demo</a>
                    </div>
                </div>
                </div>
            </div>

            <div className='p-row'>
                <div className="p-col">
                <div className="p-cards">
                    <h3>User_db_with_todo_list</h3>
                    <img src={chatify} alt="Avatar" style={{ width: "30%" }} />
                    <h5>This site having login functionality, dashboard pages from where we can see list of users and a todolist attached for keeping record online....</h5>
                    <div className="w3-section">
                        <a href="https://github.com/sanjeev662/userdbwithtodolist" className="p-button">GitHub</a>
                        <a href="https://secure-everglades-96615.herokuapp.com/" className="p-button">Demo</a>
                    </div>
                </div>
                </div>

                <div className="p-col">
                <div className="p-cards">
                    <h3>Indian_Culture</h3>
                    <img src={bitsOfCode} alt="Avatar" style={{ width: "30%" }} />
                    <h5>It's just a way, as a devloper to show Exhibition the diversity of Indian culture and heritage..In this basic tools html css are used..</h5>
                    <div className="w3-section">
                        <a href="https://github.com/sanjeev662/IndianCulture"  className="p-button">GitHub</a>
                        <a href="https://sanjeev662.github.io/IndianCulture/"  className="p-button">Demo</a>
                    </div>
                </div>
                </div>

                <div className="p-col">
                <div className="p-cards">              
                    <h3>Basic_Portfolio</h3>
                    <img src={editor} alt="Avatar" style={{ width: "30%" }} />
                    <h5>this is my basic beginner level portfolio site in this basic tools like html css are used..this site is fully responsive for portrai mood too..</h5>
                    <div className="w3-section">
                        <a href="https://github.com/sanjeev662/Portfolio" className="p-button">GitHub</a>
                        <a href="https://sanjeev662.github.io/Portfolio/" className="p-button">Demo</a>
                    </div>
                </div>
                </div>
            </div>

            </div>
            );
        }
    }
     
    export default Projects;