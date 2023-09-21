import React from 'react'
import '../styles/styles.scss'
import Logo from '../assets/logo/logo-final.png'

const Header = () => {
    return (
        <div className='divHeader'>
            <div className='divH1H2'>
                <h1>Atención Integral <br />
                Diabetes, Heridas y Pie <br />
                Diabético</h1>
                <h2>Dra Badón Alejandra y Equipo</h2>
                </div>
            <div className='divLogo'>
                <img className='logo' src={Logo} alt="Logo consultorio" />
            </div>
        </div>
    )
}

export default Header
