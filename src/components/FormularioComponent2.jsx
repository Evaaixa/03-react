// import { useState } from "react"
import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"


export const FormularioComponent2 = () => {

    /**
     * useRef
     * utilizamos useRef para hacer referencia a un input
     * 
     */
    const focusRef = useRef()

    // se ejecuta una vez al crear el elemento
    useEffect(() => {
        console.log(focusRef.current)
        // pone el foco en el elemento
        focusRef.current.focus()
        // hace scroll hasta el elemento
        focusRef.current.scrollIntoView({
            behavior: 'smooth', //para un scroll suave
            block: 'start'  //alinea al inicio del elemento
        });
    },[])


    const initialForm = {
        nombre: '',
        correo: '',
        contra: ''
    }

    const {formState, nombre, correo, contra, onInputChange} = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

  return (
<form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="nombre">Nombre</label>
    <input 
        ref={focusRef}
        type="text" 
        className="form-control" 
        name="nombre" 
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={onInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="correo">Correo Electrónico</label>
    <input 
        type="email" 
        className="form-control" 
        name="correo" 
        placeholder="Escribe tu correo"
        value={correo}
        onChange={onInputChange}
    />
  </div>
  <div class="form-group">
    <label htmlForr="contra">Contraseña</label>
    <input 
        type="password" 
        className="form-control" 
        name="contra" 
        placeholder="Contraseña"
        value={contra}
        onChange={onInputChange}
    />
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>

  )
}
