// import { useState } from "react";
import FormTareas from "./components/FormTareas";
import ListadoTareas from "./components/ListadoTareas";

function App() {
  // const [tareas, setTareas] = useState(initialState);

  return (
    <>
      <div className="autor">GDcode</div>
      <div className="container">
        <h1 className="titulo">Aplicación de Tareas</h1>

        <div className="box">
          <FormTareas/>
          <ListadoTareas/>
        </div>
      </div>
    </>
  );
}

export default App;
