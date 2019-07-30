import React, { useState } from "react";
import '../styles/Footer';
import Logo_azul from "../img/logo_fondo_azul.png";
import logo_color_extendido from '../img/logo_color_extendido.png';
import { Form } from "../components/Form";

export function Footer() {
    return <div id="Footer_container">
        <div className='Footer_main'>

            <div>
                <Form />
            </div>

            <div className="Footer_text_area">

                <div className='Footer_text'>
                    <p>© 2019 MENTA SYSTEMS</p>
                </div>

                <div className='Footer_logo'>
                    <img src={logo_color_extendido} alt="" />
                </div>

            </div>
        </div>
    </div>
}