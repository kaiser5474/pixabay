import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (termino.trim() === "") {
      setError(true);
      return;
    }
    console.log(e.target.value);
    setBusqueda(termino);
    setError(false);
  };
  return (
    <form onSubmit={(e) => handleOnSubmit(e)} noValidate>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: futbol o cafe"
            onChange={(e) => {
              setTermino(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error && <Error mensaje="Agrega un término de búsqueda" />}
    </form>
  );
};

export default Formulario;
