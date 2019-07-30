import React, { useState, useEffect } from "react";
import { PrincipalPart } from '../components/PrincipalPart'
import '../styles/style';
import logo_color_extendido from '../img/logo_color_extendido.png';
import { NavBarMobile } from "../components/NavBarMobile";


export function NavBar() {
    const [w, setW] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setW(window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setW(window.innerWidth)
            })
        }
    }, [])
    return <div className='style_container'>
        {w >= 760 && <div className="style_main">
            <div>
                <img className='style_img' src={logo_color_extendido} alt="img" />
            </div>
            <div className="style_links">
                <a href="#texthard">Confianza</a>
                <a href="#textcloud">Digitalización</a>
                <a href="#textsecurity">Seguridad</a>
                <a href="#Form_container">Contacto</a>
            </div>
        </div>}
        {w < 760 && <NavBarMobile />}
    </div>
}