import React from "react";
import Item from "./Item";
import "../stylesheets/Listado.css";
import tituloImagen from "../img/attack-on-titan.png";
import { useNavigate } from "react-router-dom";

function Listado() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          <div className="title2">
            <img src={tituloImagen} alt="Attack on Titan" className="title-image" />
          </div>
        </h1>
        <h2 className="title1">TODOS LOS PERSONAJES PRINCIPALES</h2>
      </header>
      <div>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar Sesión
      </button>
      </div>
      <div className="item-container">
        <Item
          nombre={"Eren Jaeger"}
          imagen={"Eren"}
          edad={"19"}
          sexo={"Masculino"}
          altura={"1.83"}
          poder={"Titán de Ataque"}
          creador={"Hajime Isayama"}
        />
        <Item
          nombre={"Mikasa Ackerman"}
          imagen={"Mikasa"}
          edad={"22"}
          sexo={"Femenino"}
          altura={"1.76"}
          poder={"Fuerza sobrehumana"}
          creador={"Hajime Isayama"}
        />
        <Item
          nombre={"Levi Ackerman"}
          imagen={"Levi"}
          edad={"30"}
          sexo={"Masculino"}
          altura={"1.60"}
          poder={"Fuerza sobrehumana"}
          creador={"Hajime Isayama"}
        />
        <Item
          nombre={"Armin Arlert"}
          imagen={"Armin"}
          edad={"22"}
          sexo={"Masculino"}
          altura={"1.68"}
          poder={"Titán Colosal"}
          creador={"Hajime Isayama"}
        />
        <Item
          nombre={"Reiner Braun"}
          imagen={"Reiner"}
          edad={"22"}
          sexo={"Masculino"}
          altura={"1.88"}
          poder={"Titán Acorazado"}
          creador={"Hajime Isayama"}
        />
        <Item
          nombre={"Erwin Smith"}
          imagen={"Erwin"}
          edad={"32"}
          sexo={"Masculino"}
          altura={"1.88"}
          poder={"Uso del EDM3"}
          creador={"Hajime Isayama"}
        />
        <Item
          nombre={"Historia Reiss"}
          imagen={"Historia"}
          edad={"22"}
          sexo={"Femenino"}
          altura={"1.45"}
          poder={"Sangre real"}
          creador={"Hajime Isayama"}
        />
        <Item
          nombre={"Hange Zoë"}
          imagen={"Hange"}
          edad={"28"}
          sexo={"Ambiguo Femenino"}
          altura={"1.70"}
          poder={"Uso del EDM3"}
          creador={"Hajime Isayama"}
        />
      </div>
    </div>
  );
}

export default Listado;
