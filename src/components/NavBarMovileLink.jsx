import React, { useState } from "react";



export function NavBarMobileLink(props) {
    return <div id="NavMobile_link_container">
        <button id="NavMobile_btn_close" onClick={props.onClose}>x</button>
        <div className="NavMobile_links">
            <a href="#texthard">Confianza</a>
            <a href="#textcloud">Digitalización</a>
            <a href="#textsecurity">Seguridad</a>
            <a href="#Form_container">Contacto</a>
        </div>
    </div>
}