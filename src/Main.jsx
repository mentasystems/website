import React, { useState } from "react";
import '../styles/Main';
import { TextCloud } from "../components/TextCloud";
import { TextHard } from "../components/TextHard";
import { TextSecurity } from "../components/TextSecurity";



export function Main() {
    return <div className='Main_container'>
        <div className='Main'>
            <span className="anchor" id="texthard"></span>
            <TextHard isMobile={window.innerWidth < 1000} />
            <span className="anchor" id="textcloud"></span>
            <TextCloud isMobile={window.innerWidth < 1000} />
            <span className="anchor" id="textsecurity"></span>
            <TextSecurity isMobile={window.innerWidth < 1000} />
        </div>
    </div>
}