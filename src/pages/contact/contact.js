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
                        <span className="contact">
                            Name: Igor Silva<br />
                            E-mail: xxxxx@email.com<br />
                            Number: 00 00-000000000
                        </span>
                    </div>
                </div>
            </div>
            <footer>
                <span>Desenvolvido por: Igor Silva.</span>
            </footer>
        </>
    )
}

export default Contact;