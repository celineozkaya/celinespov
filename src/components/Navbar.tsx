import { useState, type JSX } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';
import closeButton from '../assets/close.svg'

export default function Navbar() : JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={styles.nav}>
            <Link to="/"><img src={logo} alt="Logo" className={styles.logo}/></Link>
            <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                <Link to="/" className={styles.link} onClick={toggleMenu}>HOME</Link>
                <Link to="/diary" className={styles.link} onClick={toggleMenu}>DIARY</Link>
                <Link to="/about" className={styles.link} onClick={toggleMenu}>ABOUT</Link>
            
                {/* bouton close du menu mobile */}
                <div className={styles.close} onClick={toggleMenu}>
                    <img src={closeButton} alt="Fermer menu"/>
                </div>
            </div>

            {/* burger button */}
            <div className={styles.burger} onClick={toggleMenu}>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
            </div>
        </nav>
    );
};

