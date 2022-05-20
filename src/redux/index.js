import { configureStore } from '@reduxjs/toolkit';
import tareas from './slices/tareas';

export default configureStore({
    reducer: {
        tareas
    }
});

