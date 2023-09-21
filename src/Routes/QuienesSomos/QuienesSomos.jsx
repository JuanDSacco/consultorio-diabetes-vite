import React from 'react'
import '../../styles/styles.scss'
import imgMed from '../../assets/imgMed/imgMed.jpg'
import QuienesSomosDetail from '../../QuienesSomosDetail/QuienesSomosDetail'
import TextoQuienesSomos from '../../TextoQuienesSomos/TextoQuienesSomos'

const QuienesSomos = () => {
    return (
        <div className='divQuienesSomosContainer'>
            <TextoQuienesSomos/>
            <h2 className='h2Profesionales'>Profesionales</h2>
            <div className='divQuienesSomosCards'>
                <QuienesSomosDetail textoLista1='- Magister en Diabetología' textoLista2='- Diplomada en cicatrización de heridas y Pie Diabético' textoLista3='- MN 26.895' nombreMed='Alejandra F. Badón' imgMed={imgMed}/>
            </div>
            <div className='divQuienesSomosCards'>
                <QuienesSomosDetail textoLista1='- Licenciatura en Enfermería' textoLista2='- Podóloga universitaria' textoLista3='- Diplomada en Pie Diabético' textoLista4='- MN 25.154' nombreMed='Antonia Cabral' imgMed={imgMed}/>
            </div>
            <div className='divQuienesSomosCards'>
                <QuienesSomosDetail textoLista1='- Licenciada en Nutrición' textoLista2='- MN 28.215' nombreMed='Xoana' imgMed={imgMed}/>
            </div>
            <div className='divQuienesSomosCards'>
            <QuienesSomosDetail textoLista1='- Enfermera especializata en cicatrización de heridas' textoLista2='- MN 21.154' nombreMed='Fabiana Pereyra' imgMed={imgMed} />
            </div>
        </div>
    )
}

export default QuienesSomos
