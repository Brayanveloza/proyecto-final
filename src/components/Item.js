import React from "react";
import "../stylesheets/Item.css";
import { Link } from "react-router-dom";

export function Item(props) {
  return (
    <Link
      to={
        "/personaje/" +
        props.nombre +
        "/" +
        props.imagen +
        "/" +
        props.edad +
        "/" +
        props.sexo +
        "/" +
        props.altura +
        "/" +
        props.poder +
        "/" +
        props.creador
      }
    >
      <div className="App">
        <header className="App-header">
          <img
            className="img-home"
            src={require(`../img/${props.imagen}.jpg`)}
            alt={"foto de" + props.nombre}
          />
        </header>
      </div>
    </Link>
  );
}

export default Item;
