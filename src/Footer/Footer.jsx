import React from 'react'
import '../styles/styles.scss'

const Footer = () => {
    return (
        <div>
            <div className='divFooterContainer'>
                <div className='divContactanos'>
                    <h2>Contactános</h2>
                    <ul className='ulContactanos'>
                        <li className='liContactos'>Email: consultoriobadon@gmail.com</li>
                        <li className='liContactos'>Whatsapp: 11-5555-5555</li>
                        <li className='liContactos'>Tel fijo: 4444-4444</li>
                        <li className='liContactos'>Dirección: Cosquín 5124 - CABA</li>
                    </ul>
                    <ul className='ulRedes'>
                        <li className='liRedes'><i class="fa-brands fa-instagram"></i></li>
                        <li className='liRedes'><i class="fa-brands fa-whatsapp"></i></li>
                    </ul>
                </div>
                <div className='divHorarios'>
                    <h2>Horarios</h2>
                    <ul className='ulHorarios'>
                        <li className='liHorarios'>Lunes: 9 a 16hs</li>
                        <li className='liHorarios'>Martes: 9 a 16hs</li>
                        <li className='liHorarios'>Miercoles: 12 a 19hs</li>
                        <li className='liHorarios'>Jueves: 9 a 18hs</li>
                        <li className='liHorarios'>Viernes: 9 a 17hs</li>
                    </ul>
                </div>
            </div>
            <div className='divDesarrollo'>
                <h4>Desarrollado por Strix IT - idstrix@gmail.com</h4>
            </div>
        </div>
    )
}

export default Footer
