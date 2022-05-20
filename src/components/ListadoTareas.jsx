import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eliminarTarea, cambiarEstado, editarActivo } from "../redux/slices/tareas";

const ListadoTareas = () => {

  const dispatch = useDispatch();
  const { listaTareas }  =  useSelector((state) => state.tareas);

  const cambiarEstadoTarea = (idTarea, tarea) =>  {
    const { id, nombre, estado } = tarea;
    const newTarea = {id, nombre, estado: !estado };

    dispatch(
      cambiarEstado({ idTarea, newTarea })
    );
  }

  return (
    <div className='containerTareas'>
      <h1>Listado de Tareas</h1>
      { listaTareas.length > 0 ?
        listaTareas.map(tarea => (
          <div className='listTareas' key={tarea.id}>
            <p>{tarea.estado ? <del className='del'>{tarea.nombre}</del> : tarea.nombre}</p>
            <div className='actions'>
              <button className={`${tarea.estado ? 'complete' : 'status'}`} onClick={() => cambiarEstadoTarea(tarea.id, tarea)}>{tarea.estado ? 'Completada' : 'Incompleta'}</button>
              <button className='edit' onClick={() => dispatch(editarActivo(tarea))}>Editar</button>
              <button className='delete' onClick={() => dispatch(eliminarTarea(tarea.id))}>Eliminar</button>
            </div>
          </div>
        ))
        :
        <p>No hay tareas</p>
      }
    </div>
  )
}

export default ListadoTareas