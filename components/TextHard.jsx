import React, { useState } from "react";
import '../styles/Hard';
import Hard from '../img/hardware.png';


export function TextHard(props) {
    if (props.isMobile) {
        return <div id='Hard_main' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '70px',
        }}>
            <div style={{
                marginBottom: 20,
                width: "70vw"
            }} >
                <img src={Hard} alt="img" style={{
                    width: '100%'
                }} />
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.8rem',
                    textAlign: 'center',
                    color: '#525b5d'
                }}>Lo que necesitas incluso si no sabes que lo necesitas</h3>
                <div style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    color: '#808080'
                }}>
                    Cada trabajo tiene unas necesidades diferentes por eso no alquilamos dispositivos por sus características.
                     En su lugar ofrecemos experiencias de usuario de manera que siempre tengas
                     lo que necesitas para preocuparte en ofrecer tus servicios,
                    no en reiniciar el equipo.
            </div>
            </div>
        </div >
    }
    return <div id='Hard_main' style={{
        display: 'flex',
        justifyContent: ' space-between',
        width: '100%',
        height: '55vh',
        marginBottom: '80px',
        marginTop: '80px',
    }}>
        <div className='Hard_text' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '10vw',
            flex: '1',
        }}>
            <h3 style={{
                fontFamily: '"Orbitron", sans-serif',
                fontSize: '1.8rem',
                color: '#525b5d',
            }}>Lo que necesitas incluso si no sabes que lo necesitas</h3>
            <div style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: '1.1rem',
                color: '#b3bebf',
            }}>Cada trabajo tiene unas necesidades diferentes por eso no alquilamos dispositivos por sus características.
                    En su lugar ofrecemos experiencias de usuario de manera que siempre tengas
                    lo que necesitas para preocuparte en ofrecer tus servicios,
            no en reiniciar el equipo.</div>
        </div>
        <div className='Hard_img' style={{
            flex: '1',
            height: '45vh',
        }}>
            <img style={{ width: '100%' }} src={Hard} alt="img" />
        </div>
    </div>
}


