import React, { useState } from "react";
import '../styles/Form';

export function Form() {
    return <div id="Form_container">
        <div className="Font_text">
            Contacta con nosotros
        </div>

        <div className='Form_main'>
            <div>
                <div className='Form_name'>
                    <label>Nombre*</label>
                    <input type="text" name="name" placeholder="" required />
                </div>

                <div className='Form_surname'>
                    <label>Apellido*</label>
                    <input type="text" name="" required />
                </div>
            </div>
            <div>
                <div className='Form_mail'>
                    <label htmlFor="">Correo electronico* </label>
                    <input type="email" name="" id="" required />
                </div>

                <div className='Form_phone'>
                    <label htmlFor="">Numero de telefono</label>
                    <input type="tel" name="" id="" />
                </div>
            </div>
            <div className='Form_textarea'>
                <label htmlFor=""> ¿Cómo podemos ayudarte?</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button className="Form_btn">Enviar</button>

        </div>

    </div>
}