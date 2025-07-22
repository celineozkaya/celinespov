import type { JSX } from "react";
import styles from '../styles/Home.module.css';
import titre from '../assets/whatsup.png'
import illustration from '../assets/disco.png'
import Title from "../components/Title";

interface HomeProps {

}

export default function Home({} : HomeProps) : JSX.Element{
    return (
        <>
        
            <Title path={titre} title="Whats up ?!" />
        

            <div className={styles.content}>

                <div className={styles.topcontent}>
                    <div className={styles.txt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecatnderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecatnderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>

                    <div className={styles.txt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecatnderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.

                    </div>

                    <div className={styles.img}>
                        <img src={illustration} alt="disco" style={{height:"150px"}} />
                    </div>
                </div>

                <div className={styles.bottomcontent}>
                    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/3266945721" width="60%" height="100%" allow="encrypted-media; clipboard-write"></iframe>
                </div>

            </div>
        </>
    );
}