import React from 'react'
import '../../styles/styles.scss'

const QueEsLaDiabetes = () => {
    return (
        <div className='divQueEsLaDiabetesContainer'>
            <div className='divQueEsLaDiabetes'> 
                <h1>¿Qué es la Diabetes?</h1>
                <p>Es una enfermedad crónica, que se caracteriza por el aumento de azúcar (glucosa) en
                sangre por encima de los valores considerados normales.</p>
                <ul>
                    <li>Normal: 70 a 110 mg/dl</li>
                    <li>Diabetes: Igual o mayor de 126 mg/dl en ayunas, igual o mayor a 200 mg/dl en cualquier momento del día.</li>
                    <li>Sospecha: Superior a 110 mg/dl y menor a 125 mg/dl en ayunas.</li>
                </ul>
                <p>Puede aparecer a cualquier edad y tiene tratamiento.
                Es muy importante que ante la sospecha o si la persona presenta factores de riesgo, sea
                diagnosticada lo antes posible para iniciar el tratamiento y sobre todo para prevenir sus
                complicaciones</p>
                <h3>¿Por qué la glucosa puede aumentar y producir diabetes?</h3>
                <p>La insulina, una de las hormonas que produce el pancreas, encargada de mantener los
                niveles normales cuando comemos o aumenta la glucosa. Asi, cuando el pancreas produce
                insuficientes niveles de insulina o la actividad de la insulina producida es defectuosa,
                aumentan los niveles de glucosa en sangre por encima de los valores normales.</p>
                <h3>¿Cuántos tipos de diabetes hay?</h3>
                <table>
                    <tr>
                        <h4>Diabetes tipo 1</h4>
                        <p>
                        Afecta generalmente a niños, adolescentes y jóvenes de edad temprana, que por un
                        proceso autoinmune, su pancreas deja de producir insulina. Es por eso que necesitan
                        inyectarse todos los días insulina desde el comienzo de la enfermedad.</p>
                    </tr>
                    <tr><h4>Diabetes tipo 2</h4>
                        <p>
                        Generalmente se inicia en la edad adulta, habitualmente personas con obesidad. Pueden
                        tratarse durante un tiempo variable con un plan de alimentacion y de actividad fisico
                        adecuado para lograr bajar de peso o requerir tambien comprimidos o insulina para
                        controlar adecuadamente su enfermedad.
                        los sintomas al inicio suelen ser leves lo que dificulta el diagnostico temprano.</p>
                    </tr>
                    <tr>
                        <h4>Diabetes gestacional</h4>
                        <p>Se produce durante el embarazo y en la mayoría de los casos desaparece después del
                        parto. requiere un control estricto de los valores de glucosa durante todo el embarazo para
                        evitar problemas a la madre y el bebe.</p>
                    </tr>
                </table>
                <div className='divPQueEsLaDiabetes'>
                <p className='pFinalQueEsLaDiabetes'>La forma más segura de evitar los síntomas de la diabetes, es prevenirla... <br />
                ¿Cómo prevenirla? <br />
                Mantener un peso corporal adecuado mediante un estilo de vida saludable</p>
                </div>
            </div>
        </div>
    )
}

export default QueEsLaDiabetes
