import type { JSX } from "react";
import styles from '../styles/Title.module.css'

interface TitleProps{
    title: string;
    path: string;
}
export default function Title({title, path} : TitleProps) :JSX.Element {
    return (
        <div className={styles.title}>
            <img src={path} alt={title} className={styles.title}/>
        </div>
    );
}