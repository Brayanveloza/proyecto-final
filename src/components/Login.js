import "../stylesheets/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login({ setUser }) {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }
    Navigate("/Listado");
  };
  return (
    <div className="container">
      <section>
        <h1>login</h1>
        <form className="login" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="form-control"
            />
          </div>
          <button className="btn btn-outline-danger">Iniciar sesion</button>
        </form>
        {error && <p>Todos los campos son obligatorios</p>}
      </section>
    </div>
  );
}
export default Login;
