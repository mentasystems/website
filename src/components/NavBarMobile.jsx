import React, { useState } from "react";
import '../styles/NavMobile';
import logo_color_extendido from '../img/logo_color_extendido.png';
import { IoIosMenu } from "react-icons/io";
import { NavBarMobileLink } from "./NavBarMovileLink";

export function NavBarMobile() {
    const [showMenu, setShowMenu] = useState(false)

    return <div className='style_container'>
        <div className="style_main">
            <div>
                <img className='style_img' src={logo_color_extendido} alt="img" />
            </div>
            <button id="NavMobile_btn_burger" onClick={() => {
                setShowMenu(true)
            }}><IoIosMenu id="NavMobile_icon_burger" /></button>
        </div>
        {showMenu && <NavBarMobileLink onClose={() => {
            setShowMenu(false)
        }} />}
    </div>
}