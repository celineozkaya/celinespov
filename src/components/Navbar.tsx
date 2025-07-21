import { type JSX } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';

export default function Navbar() : JSX.Element {    
    return (
        <nav className={styles.nav}>
            <Link to="/"><img src={logo} alt="Logo" className={styles.logo}/></Link>
            <div className={styles.menu}>
                <Link to="/" className={styles.link}>HOME</Link>
                <Link to="/diary" className={styles.link}>DIARY</Link>
                <Link to="/about" className={styles.link}>ABOUT</Link>
            </div>
        </nav>
    );
};

