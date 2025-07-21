import { type JSX } from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() : JSX.Element {    
    return (
        <footer className={styles.footer}>
            &lt;/&gt; with &lt;3 by Cel1ne
        </footer>
    );
};

