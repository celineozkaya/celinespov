import type { JSX } from "react";
import styles from '../styles/Title.module.css'

interface TitleProps{
    title: string;
    path: string;
}
export default function Title({title, path} : TitleProps) :JSX.Element {
    return (
        <div>
            <img src={path} alt={title} className={styles.title}/>
        </div>
    );
}