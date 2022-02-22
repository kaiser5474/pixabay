import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  //hooks
  const [busqueda, setBusqueda] = useState([]);
  useEffect(() => {
    if (busqueda === "") return;
    const consultarApi = async () => {
      const imagenesXPagina = 30;
      const key = "16062309-ec3637ebed45675de2b6022a9";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&image_type=all&pretty=true&per_page${imagenesXPagina}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setBusqueda(resultado.hits);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
    </div>
  );
}

export default App;
