import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../components/footer/footer";
import Header from "../../../../components/header/header";
import './styles.css';

function Answer3(){
    return(
        <>
            <Header />
            <div className="content-container">
                <div className="answer-container">
                    <span className="correct">
                        CORRECT.
                    </span>
                </div>
                <div className="next-container">
                    <div className="next-content">
                        <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/'}>
                            <span className="next">Next-> </span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Answer3;