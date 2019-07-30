import React, { useState } from "react";
import Security from '../img/security.png';


export function TextSecurity(props) {
    if (props.isMobile) {
        return <div id='Security_main' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '70px',
        }}>
            <div className='Security_img' style={{
                marginBottom: 20,
                width: "50vw"
            }}>
                <img src={Security} alt="img" style={{
                    width: '100%'
                }} />
            </div>
            <div className='Security_text' style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.8rem',
                    textAlign: 'center',
                    color: '#525b5d'
                }}>Seguridad de grandes ligas al alcance de los mortales</h3>
                <div style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    color: '#808080'
                }}> La seguridad de tu información, así como la de tus clientes, es lo más importante.
                                                                                 Implementamos sistemas y estrategias de seguridad que usan las grandes empresas sea cual sea tu tamaño.
                Cumple rápidamente con la GDPR, olvídate de tus preocupaciones y tus competidores y dedícate a crecer con tu negocio. </div>
            </div>

        </div>
    }
    return <div id='Security_main' style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '55vh',
        marginTop: '80px',
        marginBottom: '180px',
    }}>
        <div className='Security_text' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '10vw',
            flex: ' 1'
        }}>
            <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '1.8rem',
                color: ' #525b5d',
            }}>Seguridad de grandes ligas al alcance de los mortales</h3>
            <div style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: '1.1rem',
                color: '#b3bebf',
            }}> La seguridad de tu información, así como la de tus clientes, es lo más importante.
                                                                             Implementamos sistemas y estrategias de seguridad que usan las grandes empresas sea cual sea tu tamaño.
                Cumple rápidamente con la GDPR, olvídate de tus preocupaciones y tus competidores y dedícate a crecer con tu negocio. </div>
        </div>
        <div className='Security_img' style={{
            flex: '1',
        }}>
            <img src={Security} alt="img" style={{
                width: '100%'
            }} />
        </div>
    </div>

}
