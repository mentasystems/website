import React, { useEffect } from "react";
import '../styles/Principal';
import config from '../particlesjs-config.json'

export function PrincipalPart() {
    useEffect(() => {
        try{
            window.particlesJS.load('particles-js', config);
        }catch(e){
            console.error(e)
        }
    }, [])

    return <div className='Principal_container' >
        <div id='particles-js' style={{
            position: 'absolute',
            width: window.innerWidth,
            height: '100%',
            pointerEvents: 'none'
        }}></div>
        <div className='Principal_main' style={{
            position: 'relative'
        }}>
            <div>
                <span>Ordenadores y programas añaden servicios</span> <br /> <br />
                <span>MENTA SYSTEMS </span>  <span>elimina los problemas</span>
            </div>
        </div>
    </div>
}