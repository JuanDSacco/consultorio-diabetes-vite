import React from 'react'
import '../styles/styles.scss'

const QuienesSomosDetail = ({textoLista1,textoLista2,textoLista3,textoLista4,nombreMed,imgMed}) => {
    return (
        <div className='divQuienesSomosContainerDetail'>
            <div className='divQuienesSomosLista'>
                <ul>
                    <li>{textoLista1}</li>
                    <li className='liEdit'>{textoLista2}</li>
                    <li>{textoLista3}</li>
                    <li className='liEdit'>{textoLista4}</li>
                </ul>
            </div>
            <div className='divQuienesSomosH1Img'>
                <h1>{nombreMed}</h1>
                <img className='imgMed' src={imgMed}/>
            </div>
        </div>
    )
}

export default QuienesSomosDetail
