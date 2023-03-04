import React from "react";
import Header from "../../components/header/header";
import './styles.css';

function Contact(){
    return(
        <>
            <Header />
            <div className="content-container">
                <div className="contact-container">
                    <div className="contact-content">
                        <span className="contact">Name: Igor Silva</span>
                        <span className="contact">E-mail: igorpsdsilva@gmail.com</span>
                        <span className="contact">Number: 1 (754)291-9633</span>
                    </div>
                </div>
            </div>
            <footer className="footer-contact">
                <span>All rights reserved ©</span>
                <span>Developed by: Igor Silva.</span>
            </footer>
        </>
    )
}

export default Contact;