import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  //hooks
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [imageType, setImageType] = useState("all");
  const [botonBuscar, setBotonBuscar] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPagina, setTotalPagina] = useState(1);
  useEffect(() => {
    // if (busqueda === "" || !botonBuscar) return;
    if (busqueda === "") return;
    const consultarApi = async () => {
      console.log("entro");
      const imagenesXPagina = 30;
      const key = "16062309-ec3637ebed45675de2b6022a9";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&image_type=${imageType}&pretty=true&per_page${imagenesXPagina}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
      const totalHits = Math.ceil(resultado.totalHits / imagenesXPagina);
      setTotalPagina(totalHits);
      console.log(totalHits);
      setImagenes(resultado.hits);
    };
    consultarApi();
    setBotonBuscar(false);
  }, [botonBuscar, paginaActual]);

  useEffect(() => {
    const docNext = document.getElementById("next");
    const docPrev = document.getElementById("previous");
    // manejando el elemento next del paginador
    if (paginaActual == totalPagina) {
      docNext.classList.add(["disabled"]);
    } else {
      docNext.classList.remove(["disabled"]);
    }
    //manejando el elemento previos del paginador
    if (paginaActual == 1) {
      docPrev.classList.add(["disabled"]);
    } else {
      docPrev.classList.remove(["disabled"]);
    }
  }, [paginaActual, totalPagina]);

  useEffect(() => {
    setPaginaActual(1);
    setTotalPagina(1);
  }, [botonBuscar]);

  //funciones
  const paginaAnterior = () => {
    setPaginaActual(paginaActual - 1);
  };

  const paginaSiguiente = () => {
    setPaginaActual(paginaActual + 1);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario
          setBusqueda={setBusqueda}
          setImageType={setImageType}
          setBotonBuscar={setBotonBuscar}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled" id="previous">
            <a
              className="page-link"
              tabIndex="-1"
              onClick={paginaAnterior}
              disabled
            >
              Previous
            </a>
          </li>
          <li className="page-item" id="next">
            <a className="page-link" onClick={paginaSiguiente}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
