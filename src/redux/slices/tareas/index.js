import { createSlice } from '@reduxjs/toolkit ';
import { list } from '../../../utils/data';

export const tareasSlice = createSlice({
	name: 'tareas',
	initialState: {
		listaTareas: [],
    	editar: []
	},
	reducers: {
		agregarTarea: (state, action) => {
			state.listaTareas.unshift(action.payload);
		},
		eliminarTarea: (state, action) => {
			state.listaTareas.splice(
        		state.listaTareas.findIndex((item) => item.id === action.payload), 1
      		);
		},
		cambiarEstado: (state, action) => {
			state.listaTareas[
        		state.listaTareas.findIndex((item) => item.id === action.payload.idTarea)
    		] = action.payload.newTarea;
		},
		editarActivo: (state, action) => {
			state.editar.splice(0, 1, action.payload)
		},
		editarTarea: (state, action) => {
			state.listaTareas[
        		state.listaTareas.findIndex((item) => item.id === action.payload.id)
      		] = action.payload;
		}
	}
})

export const { agregarTarea, eliminarTarea, cambiarEstado, editarActivo, editarTarea } = tareasSlice.actions;

export default tareasSlice.reducer;