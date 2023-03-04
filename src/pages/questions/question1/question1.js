import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";
import "./styles.css";

function Question1(){
    return(
        <>
            <Header />
            <div className="content-container">
                <div className="question-container">
                    <span className="question">
                    How many horcruxes did Voldemort make?
                    </span>
                </div>
                <div className="options-container">
                    <div className="options-content">
                        <ul className="options">
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-1/correct-answer'}>
                                <li className="choose-option">A) 7</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-1/incorrect-answer'}>
                                <li className="choose-option">B) 8</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-1/incorrect-answer'}>
                                <li className="choose-option">C) 5</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-1/incorrect-answer'}>
                                <li className="choose-option">D) 6</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Question1;