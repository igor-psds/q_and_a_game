import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";

function Question2(){
    return(
        <>
            <Header />
            <div className="content-container">
                <div className="question-container">
                    <span className="question">
                        Who created the marauders map?
                    </span>
                </div>
                <div className="options-container">
                    <div className="options-content">
                        <ul className="options">
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-2/incorrect-answer'}>
                                <li className="choose-option">A) James Potter, Lily Potter, Severus Snape, Albus Dumbledore.</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-2/correct-answer'}>
                                <li className="choose-option">B) James Potter, Sirius Black, Remus Lupin, Peter Pettigrew.</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-2/incorrect-answer'}>
                                <li className="choose-option">C) Lily Potter, Moaning Myrtle, Regulus Black, Peter Pettigrew. </li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-2/incorrect-answer'}>
                                <li className="choose-option">D) James Potter, Severus Snape, Remus Lupin, Albus Dumbledore.</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Question2;