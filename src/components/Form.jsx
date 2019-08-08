import React, { useState, useEffect } from "react";
import '../styles/Form';
import { PostFormInfo } from '../server';
import swal from '@sweetalert/with-react';


export function Form() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');

    return <div id="Form_container">
        <div className="Font_text">
            Contacta con nosotros
        </div>

        <div className='Form_main'>
            <div>
                <div className='Form_name'>
                    <label>Nombre*</label>
                    <input value={name} onChange={e => {
                        setName(e.target.value)
                    }} type="text" name="name" placeholder="" required />
                </div>

                <div className='Form_surname'>
                    <label>Apellido*</label>
                    <input value={surname} onChange={e => {
                        setSurname(e.target.value)
                    }} type="text" name="" required />
                </div>
            </div>
            <div>
                <div className='Form_mail'>
                    <label htmlFor="">Correo electronico* </label>
                    <input value={mail} onChange={e => {
                        setMail(e.target.value)
                    }} type="email" name="" id="" required />
                </div>

                <div className='Form_phone'>
                    <label htmlFor="">Numero de telefono</label>
                    <input value={number} onChange={e => {
                        setNumber(e.target.value)
                    }} type="tel" name="" id="" />
                </div>
            </div>
            <div className='Form_textarea'>
                <label htmlFor=""> ¿Cómo podemos ayudarte?</label>
                <textarea value={text} onChange={e => {
                    setText(e.target.value)
                }} name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button onClick={async () => {
                try {
                    PostFormInfo(`${name} ${surname}`, `
                    ${mail} ${number}
                    ${text}`)
                } catch (e) {
                    console.error(e)
                }
                swal("Enviado", "¡Gracias por ponerse en contacto con nosotros!", "success")
                setName('')
                setSurname('')
                setNumber('')
                setMail('')
                setText('')

            }} className="Form_btn">Enviar</button>

        </div>

    </div>
}