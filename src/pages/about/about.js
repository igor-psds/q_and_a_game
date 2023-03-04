import React from "react";
import Header from "../../components/header/header";
import './styles.css';

function About(){
    return(
        <>
            <Header />
            <div className="content-container">
                <div className="about-container">
                    <div className="about-content">
                        <span className="about-text">I made this Q&A game to test my skills with React.</span>
                    </div>
                </div>
            </div>
            <footer className="footer-about">
                <span>All rights reserved ©</span>
                <span>Developed by: Igor Silva.</span>
            </footer>
        </>
    )
}

export default About;