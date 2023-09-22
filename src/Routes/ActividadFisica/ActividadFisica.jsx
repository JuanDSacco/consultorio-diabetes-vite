import React from 'react'
import '../../styles/styles.scss'

const ActividadFisica = () => {
    return (
        <div className='divActFisicaContainer'>
                <h1>Actividad Física</h1>
            <div className='divActFisica'>
                <p>La actividad fisica es un componente importarte para tener un estado de salud optimo, pero
                es especialmente importante si tiene diabetes. La actividad fisica reduce los niveles de
                glucosa de la sangre {'('}glucemia{')'}. <br />
                A lo largo del tiempo, la vida moderna ha ido modificando nuestros habitos hacia un estilo
                de vida mas sedentario. Tambien puso a disposicion el acceso facil a alimentos sabrosos y
                ricos en calorias, lo que trajo aparejado un aumento del sobrepeso/obesidad y diabetes tipo
                2 y otros factores de riesgo cardiovascular en la poblacion mundial. <br />
                Llamamos actividades sedentarias a trabajos de oficina, estar sentado frente a
                computadoras o manejar un vehiculo por varias horas. Las consecuencias del
                sedentarismo son el aumento de peso, de la circunferencia de la cintura, del colesterol total
                y los trigliceridos</p>
                <h3>¿Que se puede hacer para ponerse en acción?</h3>
                <ul>
                    <li>Implementar pausas activas o saludables (interrupciones breves de 10 o 15
                    minutos), realizando ejercicios de estiramiento, movimientos de cabeza/cuello,
                    articulaciones e incluso ejercicios respiratorios durante la jornada de trabajo</li>
                    <li> Aumentar la actividad fisica cotidiana: usar escaleras, elegir camino mas largo para
                    hacer las compras, estacionar el vehiculo mas alejado del lugar de destino, compartir
                    actividades con otros familiares o amigos.
                    </li>
                    <li> Evitar estar sentado mas de 30 minutos. Ponerse de pie, caminar, elongar durante 3
                    minutos.
                    </li>
                </ul>
                <h3>¿Qué beneficios tiene la práctica de actividad física regular?</h3>
                <ol>
                    <li>Mejora los niveles de glucosa en sangre</li>
                    <li>Mejora la actividad de la insulina</li>
                    <li>Disminuye los trigliceridos</li>
                    <li>Disminuye el colesterol total</li>
                    <li>Favorece el funcionamiento del sistema cardiovascular y respiratorio</li>
                    <li>Previene la osteoporosis y la artrosis</li>
                    <li>Aumenta la fuerza y la elasticidad muscular</li>
                    <li>Da sensacion de bienestar y mejora la calidad de vida</li>
                </ol>
                <p>El aumento de la actividad fisica es una practica saludable para todas las edades.
                Es conveniente realizar un examen clinico general y cardiovascular antes de iniciar un
                programa de ejercicios.
                </p>
                <h3>¿Qué ejercicios son recomendables?</h3>
                <ul>
                    <li>Los de naturaleza aerobica, por ejemplo, caminar, nadar, correr, andar en bicicleta,
                    patinar, y gimnasia aerobica.
                    </li>
                    <li>Practicar regularmente, es decir, no menos de 30 minutos, 3 o 4 veces por semana.
                    Sumar al menos 150 minutos/semana.</li>
                    <li>Practicar ejercicios de estiramiento, movilidad y equilibrio 2 veces por semana como
                    minimo.</li>
                </ul>
                <div className='divH5ActFisica'>
                    <h5>NO SE PROPONGA OBJETIVOS INALCANZABLES</h5>
                </div>
            </div>
        </div>
    )
}

export default ActividadFisica
