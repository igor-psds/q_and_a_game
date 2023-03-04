import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import './styles.css';

function Home(){
    return (
        <>
            <Header />
            <div className='content-container'>
                <div className='menu-container'>
                    <div className='menu-content'>
                        <div className='menu-title'>
                            <span className='title'>
                                A simple Q&A game about <br/> Harry Potter.
                            </span>
                        </div>
                        <div className='menu-start'>
                            <Link  style={{textDecoration: 'none', cursor: 'default'}} to={'/question-1'}>
                                <li className='start'>Start</li>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer-home'>
                <span>All rights reserved ©</span>
                <span>Developed by: Igor Silva.</span>
            </footer>
        </>
    )
}

export default Home;