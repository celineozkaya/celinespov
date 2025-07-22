import type { JSX } from "react";
import React from 'react';
import Title from '../components/Title';
import titleImg from '../assets/thedirary.png'

interface DiaryProps{

}

export default function Diary({} : DiaryProps) : JSX.Element {
    return (
        <div>
            <Title path={titleImg} title="The Diary" />
        </div>
    );
}