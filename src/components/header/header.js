import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/about'}>
                        <li>About</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/contact'}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;