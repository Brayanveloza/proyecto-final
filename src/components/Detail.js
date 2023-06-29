import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../stylesheets/Detail.css";

const Detail = () => {
  let { nombre } = useParams();
  let { imagen } = useParams();
  let { edad } = useParams();
  let { sexo } = useParams();
  let { altura } = useParams();
  let { poder } = useParams();
  let { creador } = useParams();

  console.log(nombre);

  return (
    <div className="App-header1">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Nombre: {nombre}</h1>
          <img
            className="card-img"
            src={require(`../img/${imagen}.jpg`)}
            alt={"foto de " + nombre}
          />
          <p className="card-text">Edad: {edad}</p>
          <p className="card-text">Sexo: {sexo}</p>
          <p className="card-text">Altura: {altura}</p>
          <p className="card-text">Poder o Habilidad: {poder}</p>
          <p className="card-text">Creador o Autor: {creador}</p>
          <Link to="/Listado" className="btn btn-primar">
            Atrás
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;