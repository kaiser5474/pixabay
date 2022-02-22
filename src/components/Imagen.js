import React from "react";

const Imagen = ({ imagen }) => {
  const { comments, largeImageURL, likes, previewURL, views, tags, downloads } =
    imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
      </div>
      <div className="card-body">
        <span className="card-text">{likes} Me gusta</span>
        <p className="card-text">{views} Vistas</p>
        <p className="card-text">{comments} Comentarios</p>
        <p className="card-text">{downloads} Descargas</p>
      </div>
      <div className="card-footer text-center">
        <a
          href={largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-block"
        >
          Ver Imagen
        </a>
      </div>
    </div>
  );
};

export default Imagen;
