import React, { useState } from "react";
import '../styles/NavMobile.css'



export function NavBarMobileLink(props) {
    return <div id="NavMobile_link_container">
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '20px'
        }}>
            <button id="NavMobile_btn_close" onClick={props.onClose}>x</button>
        </div>

        <div className="NavMobile_links">
            <a onClick={props.onClose} href="#texthard">Confianza</a>
            <a onClick={props.onClose} href="#textcloud">Digitalización</a>
            <a onClick={props.onClose} href="#textsecurity">Seguridad</a>
            <a onClick={props.onClose} href="#Form_container">Contacto</a>
        </div>
    </div>
}