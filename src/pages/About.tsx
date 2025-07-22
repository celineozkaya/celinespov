import type { JSX } from "react";
import titleImg from '../assets/whoami.png'
import Title from "../components/Title";


export default function About() : JSX.Element {
    return (
        <div>
            <Title path={titleImg} title="Whoami"/>
        </div>
    );
} 