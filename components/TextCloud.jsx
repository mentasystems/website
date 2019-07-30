import React, { useState } from "react";
import Cloud from '../img/cloud.png';



export function TextCloud(props) {
    if (props.isMobile) {
        return <div id='Cloud_main' style={{
            display: ' flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                marginBottom: 20,
                width: "70vw"
            }} >
                <img src={Cloud} alt="img" style={{
                    width: '100%'
                }} />
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }} >
                <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.8rem',
                    textAlign: 'center',
                    color: '#525b5d'
                }} >Digitaliza tu negocio y disfruta de estar en las nubes</h3>
                <div style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    color: '#777'
                }}>Migramos tu negocio a diferentes niveles para que tus herramientas estén contigo allá donde estés.
                                                                                      Accede a todos tus documentos, automatiza tus  copias de seguridad,
                                                                                      trabaja en equipo con tus empleados y colaboradores y amplia tu infraestructura minimizando costes y
            dolores de cabeza. </div>
            </div>
        </div>
    }

    return <div id='Cloud_main' style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '55vh',
        marginTop: '80px',
        marginBottom: ' 80px',
    }}>
        <div style={{
            flex: '1'
        }}>
            <img style={{
                width: '100%'
            }} src={Cloud} alt="img" />
        </div>

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '10vw',
            flex: '1',
        }}>
            <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: ' 1.8rem',
                color: ' #525b5d',
            }}>Digitaliza tu negocio y disfruta de estar en las nubes</h3>
            <div style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: '1.1rem',
                color: '#777',
            }}>Migramos tu negocio a diferentes niveles para que tus herramientas estén contigo allá donde estés.
                                                              Accede a todos tus documentos, automatiza tus  copias de seguridad,
                                                              trabaja en equipo con tus empleados y colaboradores y amplia tu infraestructura minimizando costes y
dolores de cabeza. </div>
        </div>
    </div>
}

