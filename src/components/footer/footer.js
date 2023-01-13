import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

function Footer(){
    return(
        <footer>
            <Link style={{textDecoration: 'none'}} to={'/question-1'}>
                <span className="restart">Restart</span>
            </Link>
            <span>Desenvolvido por: Igor Silva.</span>
        </footer>
    )
}

export default Footer;