import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { agregarTarea, editarActivo, editarTarea } from '../redux/slices/tareas';
import { generarId } from '../utils/generarId';

const FormTareas = () => {

  const { editar }  =  useSelector((state) => state.tareas);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    nombre: ""
  });
  const { nombre } = input;

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validad que el campo no este vacio
    if(nombre.trim() === '') {
      return;
    }

    if(editar[0]) {
      dispatch(editarTarea(input))

      // Se limpia el input luego de apretar el boton cancelar
      setInput({
        nombre: ""
      });
      cancelar()
    } else {
      input.id = generarId();
      input.estado = false
  
      dispatch(agregarTarea(input));
  
      setInput({
        nombre: ""
      })
    }
  }

  useEffect(() => {
    if (editar[0]) {
      setInput(editar[0]);
    } else {
      setInput(input);
    }
  }, [editar[0]]);

  const cancelar = () => {
    dispatch(editarActivo())
    setInput({
      nombre: ""
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese un nombre"
        className="input"
        value={nombre}
        onChange={handleChange}
      />
      <button type="submit" className="btn">{ editar[0] ? 'ACTUALIZAR' : 'AGREGAR' }</button>
      { editar[0] && <button type="submit" className="cancelar" onClick={cancelar}>CANCELAR</button>}
    </form>
  );
};

export default FormTareas;
