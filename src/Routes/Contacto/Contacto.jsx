import React from 'react'

const Contacto = () => {
    return (
        <div className='divContactoContainer'>
            <h2>Formulario de contacto</h2>
            <h4><span className='spanContacto'>*</span> Campos obligatorios</h4>
            <form className='formContacto'>
                <div class="form-group">
                    <label for="text"><span className='spanContacto'>*</span> Nombre y Apellido</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1"><span className='spanContacto'>*</span> Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="number"><span className='spanContacto'>*</span> Teléfono celular</label>
                    <input type="number" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="number">Teléfono fijo</label>
                    <input type="number" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1"><span className='spanContacto'>*</span> Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <button id='buttonContacto' type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
