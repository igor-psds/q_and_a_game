import React from 'react';
import './App.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home.js';
import Question1 from './pages/questions/question1/question1';
import Answer1 from './pages/questions/correct/question1_answer/answer1.js';
import Incorrect1 from './pages/questions/incorrect/question1/incorrect1.js';
import Question2 from './pages/questions/question2/question2.js';
import Answer2 from './pages/questions/correct/question2_/answer2.js';
import Incorrect2 from './pages/questions/incorrect/question2/incorrect2.js';
import Question3 from './pages/questions/question3/question3.js';
import Answer3 from './pages/questions/correct/question3/answer3.js';
import Incorrect3 from './pages/questions/incorrect/question3/incorrect3.js';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/question-1' element={<Question1 />}/>
                <Route path='/question-1/correct-answer' element={<Answer1 />}/>
                <Route path='/question-1/incorrect-answer' element={<Incorrect1 />}/>
                <Route path='/question-2' element={<Question2 />}/>
                <Route path='/question-2/correct-answer' element={<Answer2 />}/>
                <Route path='/question-2/incorrect-answer' element={<Incorrect2 />}/>
                <Route path='/question-3' element={<Question3 />}/>
                <Route path='/question-3/correct-answer' element={<Answer3 />}/>
                <Route path='/question-3/incorrect-answer' element={<Incorrect3 />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;