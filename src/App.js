import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Detail from "./components/Detail";
import Listado from "./components/Listado";

function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Listado" element={<Listado />} />
      <Route
        path="/personaje/:nombre/:imagen/:edad/:sexo/:altura/:poder/:creador"
        element={<Detail />}
      />
    </Routes>
  );

}

export default App;
