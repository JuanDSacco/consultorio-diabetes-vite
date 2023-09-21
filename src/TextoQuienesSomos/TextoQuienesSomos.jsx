import React from 'react'
import '../styles/styles.scss'
import Institucion from '../assets/institucion/imgInstitucion.png'

const TextoQuienesSomos = () => {
    return (
        <div className='divTextoQuienesSomos'> 
            <h2 className='h2Institucion'>Institución</h2>
            <img className='imgInstitucion' src={Institucion} alt="Institución" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex hic iure nisi ea voluptas velit blanditiis quisquam! Laborum ullam atque voluptas? Perferendis asperiores placeat blanditiis iure doloribus alias, commodi vitae illum facilis dolor culpa dolorem architecto repudiandae minima? Voluptate expedita laudantium, deserunt voluptas ad provident fuga consectetur ducimus laborum velit quos eius perferendis voluptatum architecto dignissimos reprehenderit ut similique ullam, error mollitia, eligendi quod odit! Nam, eos dignissimos obcaecati ullam quo optio, in fugiat facilis numquam quod beatae. Est facere facilis ullam officiis harum inventore reiciendis. Quae reprehenderit quas eaque, laboriosam aliquam harum ea veniam itaque facilis est explicabo alias!</p>
            <hr />
        </div>
    )
}

export default TextoQuienesSomos
