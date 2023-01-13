import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";

function Question3(){
    return(
        <>
            <Header />
            <div className="content-container">
                <div className="question-container">
                    <span className="question">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.
                    </span>
                </div>
                <div className="options-container">
                    <div className="options-content">
                        <ul className="options">
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/incorrect-answer'}>
                                <li className="choose-option">A) Option 1</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/incorrect-answer'}>
                                <li className="choose-option">B) Option 2</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/incorrect-answer'}>
                                <li className="choose-option">C) Option 3</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/correct-answer'}>
                                <li className="choose-option">D) Option 4</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Question3;