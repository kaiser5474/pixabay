import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ setBusqueda, setImageType, setBotonBuscar }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);
  //const [imageType, setImageType] = useState("all");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (termino.trim() === "") {
      setError(true);
      return;
    }
    setBusqueda(termino);
    setBotonBuscar(true);
    setError(false);
  };
  return (
    <>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="form-group row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca una imagen, ejemplo: futbol o cafe"
              onChange={(e) => {
                setTermino(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-3">
            <select
              className="form-select p-2 text-center text-gray-500"
              onChange={(e) => setImageType(e.target.value)}
            >
              <option value="all">Imagen</option>
              <option value="photo">Foto</option>
              <option value="illustration">Ilustrate</option>
              <option value="vector">Vector</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar"
            />
          </div>
        </div>
        {error && <Error mensaje="Agrega un término de búsqueda" />}
      </form>
    </>
  );
};

export default Formulario;
