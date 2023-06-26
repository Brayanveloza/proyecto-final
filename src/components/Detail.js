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
      <p className="caracteristicas"></p>
      <h1 className="title">Nombre: {nombre}</h1>
      <img
        className="img-home"
        src={require(`../img/${imagen}.jpg`)}
        alt={"foto de" + nombre}
      />
      <h1 className="title">Edad: {edad}</h1>
      <h1 className="title">Sexo: {sexo}</h1>
      <h1 className="title">Altura: {altura}</h1>
      <h1 className="title">Poder o Habilidad: {poder}</h1>
      <h1 className="title">Creador o Autor: {creador}</h1>
      <div>
        <Link to="/Listado" className="btn-search">
          Atras
        </Link>
      </div>
    </div>
  );
};

export default Detail;
