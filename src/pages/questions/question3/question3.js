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
                        Why was Sirius sent to Azkaban?
                    </span>
                </div>
                <div className="options-container">
                    <div className="options-content">
                        <ul className="options">
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/incorrect-answer'}>
                                <li className="choose-option">A) He was accused of robbing Gringotts bank.</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/incorrect-answer'}>
                                <li className="choose-option">B) He was accused of killing Peter Pettigrew.</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/incorrect-answer'}>
                                <li className="choose-option">C) He was accused of trying to kill Harry.</li>
                            </Link>
                            <Link style={{textDecoration: 'none', cursor: 'default'}} to={'/question-3/correct-answer'}>
                                <li className="choose-option">D) He was accused of killing Peter Pettigrew and 12 muggles.</li>
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